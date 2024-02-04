import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

//Shop component is responsible for rendering a list of products
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>#Stay Home</h2>
        <p>Save more with coupons and up to 70% off!</p>
      </div>

      {/* Display a list of products using the Product component. */}
      <div className="products">
      {/* Mapping over the product data and rendering a Product component for each product. */}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
