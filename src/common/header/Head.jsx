import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+49 1575 293 58 02</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">mkocerim@gmail.com</label>
          </div>
          <div className="right row RText">
            <label htmlFor="">Theme FAQ`s </label>
            <label htmlFor="">Need Helps</label>
            <span>
              <i className="fa fa-flag"></i>
            </span>
            <label htmlFor="">EN</label>
            <span>
              <i className="fa fa-flag"></i>
            </span>
            <label htmlFor="">DE</label>
            <span>
              <i className="fa fa-flag"></i>
            </span>
            <label htmlFor="">TR</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
