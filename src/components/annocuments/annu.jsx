import React from "react";

const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle10 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annouc background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img
              src="./images/banner-1.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle10}>
            <img
              src="./images/banner-2.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;