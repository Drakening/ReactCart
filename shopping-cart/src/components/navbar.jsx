import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { CartSummary } from "./CartSummary"; 
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        <span>TMJ</span>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <div className="cart-main">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <CartSummary />
        </div>
        
      </div>

    </div>
  );
};
