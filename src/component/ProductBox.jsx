import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import LazyLoad from 'react-lazy-load';

function ProductBox({product}) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      }
  return (
    <div key={product.id} className="flex flex-col h-full bg-white shadow-lg p-5 my-3 rounded-3xl">
    <div className="flex justify-center items-center mb-4">
    <LazyLoad height={300} offsetVertical={300}>
        <img 
          src={product.image} 
          alt={product.title} 
          className='w-[200px] h-[300px] object-cover'
        />
      </LazyLoad>
    </div>
    <div className="flex flex-col flex-grow p-4">
      <p className="text-lg font-semibold mb-2">{product.title}</p>
      <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
    </div>
    <button 
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-auto" 
      onClick={() => handleAddToCart(product)}
    >
      Add to cart
    </button>
  </div>
  )
}

export default ProductBox