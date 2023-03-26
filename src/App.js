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

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item, index) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQyt={decreaseQty}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
