import React from "react";
import "./daily.css";
import { BsCart } from "react-icons/bs";
const Daily = () => {
  return (
    <div className="daily">
      <div className="daily-container">
        <div className="daily-main">
          <div className="daily-left">
            <div className="daily-item-textcontent">
              <h2>THE BEST PIZZA MENU IN TOWN</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                blandit arcu in pretium molestie. Interdum et malesuada fames
                ac.
              </p>
            </div>
            <div className="daily-item-b">
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p1-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>VALDOSTANA PIZZA</h2>
                    <p>15.30$</p> <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p2-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>MARGHERITA PIZZA</h2>
                    <p>18.70$</p>
                    <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p4-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>DOUBLE CHEESE PIZZA</h2>
                    <p>11.19$</p> <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p3-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>BUFFALO PIZZA</h2>
                    <p>25.00$</p> <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p2-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>HAWAIIAN PIZZA</h2>
                    <p>55.00$</p> <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
              <div className="daily-item">
                <div className="daily-item-box">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p1-300x300.png"
                    alt=""
                  />
                  <div className="daily-item-text">
                    <h2>VEGETARIAN PIZZA</h2>
                    <p>8.50$</p> <BsCart className="daily-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="daily-right">
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p4.png"
              alt=""
            />
            <div className="daily-right-text">
              <p>CHOOSE YOUR FLAVOR</p>
              <h2>PIZZA OF THE DAY</h2>
              <p>CALL US NOW:</p>
              <h4>1-234-567-333</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
