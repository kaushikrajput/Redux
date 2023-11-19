import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <h2>Redux Store</h2>
      <div className="">
        <Link className="nav-link" to="/cart">
          Cart
          <span className="cart-count">{items.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
