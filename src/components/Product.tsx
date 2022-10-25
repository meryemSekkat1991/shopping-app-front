import React from 'react'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { productDataType } from '../utils/productData'

const Product: React.FC<{ product: productDataType }> = ({ product }) => {
  const { images, name, price, slug } = product
  const image = images[0]
  return (
    <div>
      <div className='container'>
        <Link to={`/products/${slug}`}>
          <img src={image} alt={name} />
          <div className='link'>
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  )
}

export default Product
