import React, {useEffect} from 'react'
import axios from "axios";
import {productDataType} from "../utils/productData";
import SingleProductCard from "../components/SingleProductCard";
import {useParams} from "react-router-dom";

let getId = "";

const SingleProductPage : React.FC<{ product: productDataType | undefined }> = ({ product }) => {
  const {id} = useParams<{ id: string }>()
  const productData  = product;

  useEffect(() => {
    if (id) {
      console.log(id)
      getId = id;
    }
    // eslint-disable-next-line
  }, )
  return (
    <div>
      <SingleProductCard product={productData}/>
    </div>
  )
}


class SingleProductsPage extends React.Component {
  public id: number | undefined;
  public product: productDataType | undefined;

  componentDidMount() {
    axios.get(`http://localhost:8081/api/products/${getId}`)
      .then(res => {
        this.product = res.data;
        console.log(res.data)
        this.setState(this);
      })
  }

   // @ts-ignore
  render() {
    return (
       <div>
        <SingleProductPage product={this.product}/>
       </div>
     )
   }
}


export default SingleProductsPage
