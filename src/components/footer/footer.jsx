import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container grid2">
        <div className="box">
          <h1>Bonik</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            libero esse, totam dolorum explicabo perferendis quos culpa
            recusandae quas sit natus eveniet ratione molestias aliquam ad
            minima neque sed. Molestias!
          </p>
          <div className="icon f_flex">
            <div className="img d_flex">
              <i className="fa-brands fa-google-play"></i>
              <span>Google Play</span>
            </div>
            <div className="img d_flex">
              <i className="fa-brands fa-app-store-ios"></i>
              <span>App Store</span>
            </div>
          </div>
        </div>
        <div className="box">
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Cares</li>
            <li>Terms& Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="box">
          <h2>Contact Us</h2>
          <ul>
            <li>70 Washington Square South, NY 10012, United States</li>
            <li>Email:mkocerim@hotmail.com</li>
            <li>Phone: +49 1575 2935802</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
