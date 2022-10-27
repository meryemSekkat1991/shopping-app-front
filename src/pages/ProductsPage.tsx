import React from 'react'
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {productDataType} from "../utils/productData";

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

let productsList = [{id: 1}, {id: 2}];


class ProductsPage extends React.Component {
  public data: productDataType[] | undefined;
  componentDidMount() {
    console.log("fetch");
    axios.get(`http://localhost:8081/api/products`)
      .then(res => {
        this.data = res.data._embedded.products;
        console.log(res.data._embedded.products)
        this.setState(this);
      })
  }

   // @ts-ignore
  render() {
     return (
       <div>
         <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
           {this.data?.map(i => {
             return <ProductCard key={i.name} product={i}/>
           })}
         </div>
       </div>
     )
   }
}


export default ProductsPage
