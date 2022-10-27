import {productData} from "../utils/productDataType";
import React from "react";
import {FaSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import {productDataType} from "../utils/productData";

const ProductCard: React.FC<{ product: productDataType }> = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/products/${product.id}`}>
        <div className='link'>
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
        </div>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          Shoes! {product.id}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
