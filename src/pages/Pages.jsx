import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";
import TopCate from "../components/top/topCate";
import NewArrivals from "../components/newarrivals/newArrivals";
import Discount from "../components/discount/discount";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
    </>
  );
};

export default Pages;
