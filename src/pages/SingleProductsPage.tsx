import React from 'react'
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {productDataType} from "../utils/productData";
import SingleProductCard from "../components/SingleProductCard";
import {useParams} from "react-router-dom";

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

let productsList = [{id: 1}, {id: 2}];


class SingleProductsPage extends React.Component {
  public id: number | undefined;
  public data: productDataType[] | undefined;
  componentDidMount() {

    console.log();
    axios.get(`http://localhost:8081/api/products/1`)
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
         <SingleProductCard product={{
                 id: '',
                 active: undefined,
                 dateCreated: undefined,
                 description: undefined,
                 categories: undefined,
                 imageUrl: undefined,
                 lastUpdated: new Date(),
                 name: '',
                 sku: '',
                 unitPrice: 0,
                 unitInStock: 0,
                 price: 0
             }}/>
       </div>
     )
   }
}


export default SingleProductsPage
