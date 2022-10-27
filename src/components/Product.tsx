import React, {
} from "react";
import axios from "axios";
import {productDataType} from "../utils/productData";

let data: Array<any> = [];

class Products extends React.Component {
  public productsData: productDataType[] = [];

  componentDidMount() {
    console.log("fetch");
    axios.get(`http://localhost:8081/api/products`)
      .then(res => {
        data = res.data._embedded.product;
        console.log(data)
        this.setState(this);
      })
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state} times`;
  }

  render() {
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default Products;
