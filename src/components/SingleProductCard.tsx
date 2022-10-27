import React from "react";
import {productDataType} from "../utils/productData";

const SingleProductCard: React.FC<{ product: productDataType | undefined }> = ({ product }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={product?.imageUrl} alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p>{product?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
