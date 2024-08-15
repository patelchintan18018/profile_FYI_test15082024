import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.myBag);

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
      {/* <div className="grid grid-rows justify-center justify-items-center items-center shadow-lg m-10 p-10 md:grid-cols-5 text-center"> */}
      {cartProducts.length === 0 ? (
        <p className="text-center mt-10 font-semibold text-3xl">Empty Cart</p>
      ) : (
        cartProducts.map((cartItem) => <CartProduct cartItem={cartItem} />)
      )}
      {/* </div> */}
    </div>
  );
}

export default Cart;
