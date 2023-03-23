import React from "react";

const Categories = () => {
 
  return (
    <>
      <div className="category">
        {data.map((item, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={item.cateName} alt="" />
              <span>{item.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
