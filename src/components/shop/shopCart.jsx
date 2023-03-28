import React, { useState } from "react";

const ShopCard = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((items, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop d_flex">
              <div className="img">
                <span className="discount">{items.discount}%Off</span>
                <img src={items.cover} alt="cvr" />
                <div className="product-like">
                  <label htmlFor="">0</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{items.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${items.price}.00</h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCard;
