import React from "react";
import CatG from "./catG";
import ShopCart from "./shopCart";
import "./shop.css";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <CatG />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

<h1>SHOP</h1>;
