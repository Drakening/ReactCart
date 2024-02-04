import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

// Context using React's createContext function.
export const ShopContext = createContext(null);

// Generatea the default cart structure based on the available products.
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {

  // State variable to manage the cart items using React's useState hook.
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Calculates the total amount of the items in the cart.
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // Add an item to the cart.
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Update the quantity of an item in the cart.
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Reset the cart to its default state (which is empty).
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // Context value with cart-related functions.
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  // Providing the context value to the components within the ShopContextProvider.
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
