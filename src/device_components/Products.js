import React from "react";
import product_card from "../data/product_data";
import "./Products.css";

const Products = () => {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img alt="headphones" src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h2>HeadPHONES</h2>
      <div className="main_content">{listItems}</div>
    </div>
  );
};
export default Products;
