import React from 'react'
import ProductCard from "./ProductCard";
import ProductItem from "./ProductItem";

let productsList = [{id: 1}, {id: 2}];

const ProductList = () => {
  return (
    <div>

      <div className='grid grid-cols-3 gap-4'>
        {productsList.map(p => {
          // @ts-ignore
          return <ProductItem key={p.id} product={p}/>
        })}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {productsList.map(i => {
          // @ts-ignore
          return <ProductCard key={i.id} product={i}/>
        })}
      </div>
    </div>
  )
}

export default ProductList
