import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


//Product component is responsible for rendering an individual product. It displays the product image, name, and price.
export const Product = (props) => {

  // Destructuring values from the props.data object.
  const { id, productName, price, productImage } = props.data;

  // Destructuring values from the ShopContext.
  const { addToCart, cartItems } = useContext(ShopContext);

  // Retrieving the quantity of the product in the cart.
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> R{price}</p>
      </div>

      {/* Button to add the product to cart. It also has dynamic text based on the quantity in the cart. */}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
