import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
  const cartProducts = useSelector((state) => state.cart.myBag)

  return (
    <>
    <div className='Navbar flex justify-between py-6 px-10 items-center border-b-4'>
    <div className="logo text-2xl font-bold">PROFILE.FYI</div>
    <nav>
        <ul className='flex gap-10 font-semibold font-2xl'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart {cartProducts.length}</Link>
          </li>
          
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar