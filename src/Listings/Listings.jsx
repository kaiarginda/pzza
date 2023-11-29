import React from "react";
import "./listings.css";
const Listings = () => {
  return (
    <div className="listings" id="listing">
      <div className="ls-bg"></div>
      <div className="listings-container">
        <div className="listings-main">
          <div className="listings-item">
            <div className="listings-item-top">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p5.png"
                alt=""
              />
            </div>
            <div className="listings-item-text">
              <div className="ls-item-content">
                <h2>ANY DAY OFFERS</h2>
                <p> New phenomenon burger taste</p>
              </div>
              <h3>12.99$</h3>
            </div>
          </div>

          {/*  */}

          <div className="listings-item bc-bl-wh">
            <div className="listings-item-top">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p2.png"
                alt=""
              />
            </div>
            <div className="listings-item-text">
              <div className="ls-item-content">
                <h2>OTHER FLAVORS</h2>
                <p>Save room. we made salads</p>
              </div>
              <h3>12.99$</h3>
            </div>
          </div>

          {/*  */}

          <div className="listings-item">
            <div className="listings-item-top">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/h1_banner3.png"
                alt=""
              />
            </div>
            <div className="listings-item-text">
              <div className="ls-item-content">
                <h2>FIND AN ADDRESS</h2>
                <p>Street address, City, Country</p>
              </div>
              <h3>12.99$</h3>
            </div>
          </div>
        </div>
        <div className="ls-bg ls-bg-1"></div>
      </div>
    </div>
  );
};

export default Listings;
