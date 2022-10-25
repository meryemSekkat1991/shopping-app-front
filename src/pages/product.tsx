import React, {
} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";


class Products extends React.Component {
  constructor(props: { count: 0}) {
    super(props);
    this.state = {
      count: 0
    };
  }


  componentDidMount() {
    console.log("fetch");
    axios.get(`http://localhost:8081/api/products`)
      .then(res => {
        this.setState(this);
      })
    document.title = `You clicked ${this.state} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state} times`;
  }

  render() {
    return (
      <div>
        <ProductCard></ProductCard>
      </div>
    );
  }
}

export default Products;
