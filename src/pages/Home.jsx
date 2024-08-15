import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import LazyLoad from 'react-lazy-load';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-5">
        {Array.isArray(products) && products.map(product => (
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
        ))}
      </div>
    </div>
  );
}

export default Home;
