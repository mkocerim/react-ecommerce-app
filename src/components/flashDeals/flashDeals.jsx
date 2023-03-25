import React from "react";
import FlashCard from "./flashCard";

<<<<<<< HEAD
const FlashDeals = ({ productItems, addToCart }) => {
=======
const FlashDeals = ({ productItems }) => {
>>>>>>> 0afb27a9f1f118cc846b960a8942eb383c9e3df5
  return (
    <>
      <section className="flash background">
        <div className="container ">
          <div className="heading f_flex">
            <i className="fa fa-bolt">
              <h1>Flash Deals</h1>
            </i>
<<<<<<< HEAD
            <FlashCard productItems={productItems} addToCart={addToCart} />
=======
            <FlashCard productItems={productItems} />
>>>>>>> 0afb27a9f1f118cc846b960a8942eb383c9e3df5
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
