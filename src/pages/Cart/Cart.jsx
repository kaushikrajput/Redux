import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, removeAll, incrementProduct ,reduceProduct} from "../../store/cartSlice";
import "./style.scss";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  const incrementproduct = (productId) => {
    dispatch(incrementProduct(productId));
  };
  const reduceproduct = (productId) => {
    dispatch(reduceProduct(productId));
  };

  const totalPrice = products.cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className="cart">
        {/* <h2>Cart</h2> */}
        {products?.cart?.map((product, index) => (
          <div className="cart-card" key={index}>
            <img src={product.images} alt="" />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div className="quantity">
              <button onClick={() => reduceproduct(product)}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{product.quantity}</span>
              <button onClick={() => incrementproduct(product)}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="product-count">
              <p>${product.price * product.quantity}</p>
              <button className="btn" onClick={() => handleRemove(product)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="cart-bottom">
          <p className="total-ammount">Total :${totalPrice.toFixed(2)}</p>
          <button className="btn" onClick={handleRemoveAll}>
            Remove All items
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
