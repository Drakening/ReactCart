import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

// Cart component renders the shopping cart, displaying the items added to it. 
//It uses data and functions from the ShopContext to retrieve cart information. 
export const Cart = () => {

  // Destructuring values from the ShopContext.
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  
  // Calculating the total amount of items in the cart.
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-banner" >
      <h2>#Shopping Cart</h2>
      <p>Take a look at you're items</p>
      </div>
      {/* Rendering CartItem components for each product in the cart that has a quantity over 0. */}
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {/* Conditional rendering based on whether the cart is empty or not. */}
      {totalAmount > 0 ? (
        // If the cart is not empty, display checkout.
        <div className="checkout">
          <p> Subtotal: R{totalAmount} </p>
          <button className="checkout-btn"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
          <button className="continue-shopping-btn" onClick={() => navigate("/")}> Continue Shopping </button>
          
        </div>
      ) : (
        // If the cart is empty, display a cart empty.
        <div className="cart-empty">
        <h1 className="cart-empty-text">Cart is Empty</h1>
        <button className="continue-shopping-btn btn-2" onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      )}
    </div>
  );
};
