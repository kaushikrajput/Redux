import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/cart.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <div className="container">
        <img src={cart} alt="empty-cart-img" />
        <button className="btn" onClick={() => navigate("/")}>
          Go Back To Add Some Products
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
