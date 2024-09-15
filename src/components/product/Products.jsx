import React from 'react'
import { useProductsQuery } from '../../redux/api/productsApi'
import { NavLink } from 'react-router-dom';

const Products = () => {
  const { data } = useProductsQuery();

  return (
    <div>
      {
        data && data.payload &&
        data.payload.map(product =>
          <div className='p-4 shadow-2xl' key={product._id}>
            <NavLink to={`/single/${product._id}`}>
              <img src={product.product_images[0]} alt={product.product_name} />
            </NavLink>
            <div className='flex flex-col mt-4'>
              <strong className='text-xl' key={product._id}>{product.product_name}</strong>
              <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 50) + '...'}</p>
              <b>${product.price}</b>
            </div>
          </div>
        )}
    </div>
  )
}

export default Products
