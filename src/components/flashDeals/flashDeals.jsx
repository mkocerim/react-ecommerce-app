import React from "react";
import FlashCard from "./flashCard";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container ">
          <div className="heading f_flex">
            <i className="fa fa-bolt">
              <h1>Flash Deals</h1>
            </i>
            <FlashCard productItems={productItems} addToCart={addToCart} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
