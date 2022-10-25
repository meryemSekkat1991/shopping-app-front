import React from 'react'
import Product from './Product'
import { productDataType } from '../utils/productData'

const GridView: React.FC<{ filteredProducts: productDataType[] }> = ({
  filteredProducts,
}) => {
  return (
    <div className='products-container'>
      {filteredProducts.map(product => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default GridView
