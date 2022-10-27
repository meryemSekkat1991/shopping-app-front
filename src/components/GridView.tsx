import React from 'react'
import Product from './Product'
import { productDataType } from '../utils/productData'
import ProductCard from "./ProductCard";

const GridView: React.FC<{ filteredProducts: productDataType[] }> = ({
  filteredProducts,
}) => {
  return (
    <div className='products-container'>
    </div>
  )
}

export default GridView
