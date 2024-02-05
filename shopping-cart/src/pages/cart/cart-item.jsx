import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

// CartItem component renders individual items within the shopping cart.
// It displays the product image, name, price, and provides buttons to adjust the quantity in the cart.
export const CartItem = (props) => {
  // Destructuring rom the props.data object.
  const { id, productName, price, productImage } = props.data;

  // Destructuring from the ShopContext.
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  //handles the removing of specific item from the cart.
  const handleClearItem = () => {
    updateCartItemCount(0, id);
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt="product" />
      <div className="description">
        <p className="title-x">
          <b>{productName}</b>
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <p className="price-x"> Price: R{price}</p>
        <button onClick={handleClearItem} className="clear-item-button">
          Delete
        </button>
      </div>
    </div>
  );
};
