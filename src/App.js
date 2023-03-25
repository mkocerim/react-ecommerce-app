import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import data from "./components/flashDeals/data";
import { useState } from "react";
import Cart from "./common/cart/cart";

function App() {
  // stpe1: fetch data from database
  const { productItems } = data;
  const [cartItem, setCardItem] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
