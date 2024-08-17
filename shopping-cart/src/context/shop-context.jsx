import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

// Create a new context for the shop
export const ShopContext = createContext(null);

// Function to generate the initial empty cart structure
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;  // Initialize each product quantity to 0
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // State to hold the current cart items
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to calculate the total amount in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product info and calculate its total price
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Function to reset the cart (e.g., after checkout)
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // Object containing all the cart-related functions and state
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  // Provide the context value to all child components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
