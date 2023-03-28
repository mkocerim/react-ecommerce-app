import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";
import TopCate from "../components/top/topCate";
import NewArrivals from "../components/newarrivals/newArrivals";
import Discount from "../components/discount/discount";
import Shop from "../components/shop/shop";
import Annu from "../components/annocuments/annu";
import Wrapper from "../components/wrapper/wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  );
};

export default Pages;
