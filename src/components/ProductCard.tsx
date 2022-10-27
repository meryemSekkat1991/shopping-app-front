import React from "react";
import {Link} from "react-router-dom";
import {productDataType} from "../utils/productData";

const numberFormat = (value: number | undefined) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
    // @ts-ignore
  }).format(value);

const ProductCard: React.FC<{ product: productDataType }> = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/products/${product.id}`}>
        <div className='link'>
          <figure><img src={product.imageUrl} alt="Shoes"/></figure>
        </div>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">{product.sku}</div>
        </h2>
        <p>{product.description}</p>
        <p>{numberFormat(product.unitPrice)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.categories}</div>
          <div className="badge badge-outline">{product.active}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
