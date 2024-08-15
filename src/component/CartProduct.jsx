import React from 'react';
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../store/cartSlice";

function CartProduct({cartItem}) {

    const dispatch = useDispatch();

    const removeItem = (cartItem) => {
      dispatch(removeFromCart(cartItem));
    };

  return (
    <div className="grid grid-rows justify-center justify-items-center items-center shadow-lg m-10 p-10 md:grid-cols-5 text-center">
              <div className="flex justify-center items-center">
                <img
                  src={cartItem.image}
                  alt={cartItem.title || "Product image"}
                  className="w-[100px] h-[150px]"
                />
              </div>
              <div>
                <h1 className="font-bold">{cartItem.title}</h1>
                <h1 className="mt-3">
                  {cartItem.price} X {cartItem.itemQuantity}
                </h1>
              </div>
              <div className="font-bold">
                {(cartItem.price * cartItem.itemQuantity).toFixed(2)}
              </div>
              <div className="flex flex-cols justify-center items-center text-center gap-5 mt-3">
                <button
                  className="bg-gray-300 h-[35px] w-[35px] rounded text-2xl font-bold flex justify-center items-center hover:bg-black hover:text-gray-300"
                  onClick={() => dispatch(decrementQuantity(cartItem))}
                >
                  -
                </button>
                <p>{cartItem.itemQuantity}</p>
                <button
                  className="bg-gray-300 h-[35px] w-[35px] rounded text-2xl font-bold flex justify-center items-center hover:bg-black hover:text-gray-300"
                  onClick={() => dispatch(incrementQuantity(cartItem))}
                >
                  +
                </button>
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
  )
}

export default CartProduct