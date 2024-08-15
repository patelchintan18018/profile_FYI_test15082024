import React, { useEffect, useState } from 'react';
import ProductBox from '../component/ProductBox';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

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
  }, [products]);

 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-5">
        {Array.isArray(products) && products.map(product => (
            <ProductBox product={product}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
