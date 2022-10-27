import React from 'react'
import {productData} from "../utils/productDataType";

const Product: React.FC<{ product: productData }> = ({ product }) => {
  return (
    <div>
      <div className='container '>
        <span>
            {product.id}
        </span>
      </div>
    </div>
  )
}
export default Product
