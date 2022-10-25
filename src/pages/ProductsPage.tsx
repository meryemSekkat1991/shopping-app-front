import React from 'react'
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const ProductsPage = () => {
   return (
    <main>
      <div className="grid gap-4 md:gap-6">
        <ProductList/>
      </div>

    </main>
  )
}


export default ProductsPage
