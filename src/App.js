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

<<<<<<< HEAD
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

=======
>>>>>>> 0afb27a9f1f118cc846b960a8942eb383c9e3df5
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
<<<<<<< HEAD
            exact
=======
>>>>>>> 0afb27a9f1f118cc846b960a8942eb383c9e3df5
            element={<Cart cartItem={cartItem} addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
