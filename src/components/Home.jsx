import React from "react";
import Categories from "./mainpage/Categories";
import SlideCard from "./mainpage/SlideCard";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SlideCard />
        </div>
      </section>
    </>
  );
};

export default Home;
