import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { productDataType } from '../utils/productData'

const ListView: React.FC<{ filteredProducts: productDataType[] }> = ({
  filteredProducts,
}) => {
  return (
    <div>
      {filteredProducts.map(product => {
        const { slug, images, name, price, itemDescription } = product
        return (
          <article key={slug}>
            <Link to={`/products/${slug}`}>
              <img src={images[0]} alt={name} />
            </Link>

            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{itemDescription.substring(0, 150)}...</p>
              <Link to={`/products/${slug}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ListView
