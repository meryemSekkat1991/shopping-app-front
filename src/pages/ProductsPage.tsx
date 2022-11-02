import React from 'react'
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {productDataType} from "../utils/productData";


class ProductsPage extends React.Component {
  public data: productDataType[] | undefined;
  componentDidMount() {
    console.log("fetch");
    axios.get(`http://localhost:8081/api/products`)
      .then(res => {
        this.data = res.data;
        console.log(res.data)
        this.setState(this);
      })
  }

   // @ts-ignore
  render() {
     return (
       <div>
         <div className='mt-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
           {this.data?.map(i => {
             return <ProductCard key={i.name} product={i}/>
           })}
         </div>
       </div>
     )
   }
}


export default ProductsPage
