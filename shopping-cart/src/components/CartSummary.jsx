import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";


export const CartSummary = () => {
  // Destructuring values from the ShopContext.
    const { cartItems } = useContext(ShopContext);

    const totalItems = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

return (
    <div className="cart-summary">
        <span>{totalItems}</span>
    </div>
    );
};
