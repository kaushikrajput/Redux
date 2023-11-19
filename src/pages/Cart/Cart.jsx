import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";
import './style.scss'

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="cart">
        <h2>Cart</h2>
        {products.map((product) => (
          <div className="cart-card">
            <img src={product.images} alt="" />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
