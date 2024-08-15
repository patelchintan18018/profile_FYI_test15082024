import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,decrementQuantity, incrementQuantity} from '../store/cartSlice';


function Cart() {

const cartProducts = useSelector((state) => state.cart.myBag);
const dispatch = useDispatch();

  const removeItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const total = cartProducts.reduce(
    (prev, curr) => (prev += curr.price * curr.itemQuantity),
    0
  );

  return (
    <div>
       <div className="flex flex-rows justify-between items-center mx-10 my-5 text-xl">
        <p>Your Bag</p>
        <p className="font-bold">Total : INR {total.toFixed(2)}</p>
      </div>
      {cartProducts.length ===0 ? (<p className='text-center mt-10 font-semibold text-3xl'>Empty Cart</p>): ( cartProducts.map((cartItem) => {
       return <div className="grid grid-rows justify-center justify-items-center items-center shadow-lg m-10 p-10 md:grid-cols-5 text-center">
       <div className="flex justify-center items-center">
       <img src={cartItem.image} alt={cartItem.title || 'Product image'} className="w-[100px] h-[150px]" />

       </div>
       <div>
         <h1 className="font-bold">{cartItem.title}</h1>
         <h1 className="mt-3">
           {cartItem.price} X {cartItem.itemQuantity}
         </h1>
       </div>
       <div className="font-bold">{(cartItem.price * cartItem.itemQuantity).toFixed(2)}</div>
       <div className="flex flex-cols justify-center items-center text-center gap-5 mt-3">
         <button className="bg-gray-300 h-[35px] w-[35px] rounded text-2xl font-bold flex justify-center items-center hover:bg-black hover:text-gray-300" onClick={() => dispatch(decrementQuantity(cartItem))}>-</button>
         <p>{cartItem.itemQuantity}</p>
         <button className="bg-gray-300 h-[35px] w-[35px] rounded text-2xl font-bold flex justify-center items-center hover:bg-black hover:text-gray-300" onClick={() => dispatch(incrementQuantity(cartItem))}>+</button>
       </div>
       <div>
         <button
           className="p-2 bg-red-500 rounded text-white hover:text-black mt-5"
           onClick={() => removeItem(cartItem)}
         >
           Remove
         </button>
       </div>
     </div>
      }))}
    </div>
  )
}

export default Cart