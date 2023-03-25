import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
<<<<<<< HEAD
      <FlashDeals productItems={productItems} addToCart={addToCart} />
=======
      <FlashDeals productItems={productItems} />
>>>>>>> 0afb27a9f1f118cc846b960a8942eb383c9e3df5
    </>
  );
};

export default Pages;
