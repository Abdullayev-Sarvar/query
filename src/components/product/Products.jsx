import React from 'react'
import { useProductsQuery } from '../../redux/api/productsApi'
import { NavLink } from 'react-router-dom';

const Products = () => {
  const { data } = useProductsQuery();

  return (
    <div className='grid grid-cols-4 gap-4 my-8'>
      {
        data && data.payload &&
        data.payload.map(product =>
          <div className='p-4 shadow-2xl rounded-xl transition-all hover:scale-95' key={product._id}>
            <NavLink to={`/single/${product._id}`}>
              <img className='w-full overflow-hidden transition-all hover:scale-110' src={product.product_images[0]} alt={product.product_name} />
            </NavLink>
            <div className='flex flex-col mt-4'>
              <strong className='text-xl' key={product._id}>{product.product_name}</strong>
              <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 50) + '...'}</p>
              <div className='flex items-end gap-3'>
                <b className='text-xl text-red-600'>${product.sale_price}</b>
                <span className='text-gray-400 text-sm ml-2 line-through'>${product.original_price}</span>
              </div>
              <p>Category: {product.category}</p>
              <p className="text-gray-600 text-sm mb-2">In Stock: {product.number_in_stock}</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Products