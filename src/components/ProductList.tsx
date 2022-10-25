import React from 'react'
import GridView from "./GridView";
import ListView from "./ListView";
import Product from "./Product";
import ProductCard from "./ProductCard";

const numbers = [1, 2, 3, 4, 5];
const ProductList = () => {

  return (
    <div className='grid grid-cols-3 gap-4'>
      {numbers.map(i => {
        return <ProductCard/>
      })}
    </div>
  )
}

export default ProductList
