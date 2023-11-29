import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-container">
        <div className="ls-bg"></div>
        <div className="footer-main">
          <div className="footer-top">
            <hr />
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/food-store-logo-w.png"
              alt=""
            />
            <hr />
          </div>
          <div className="footer-mid">
            <ul>
              <li>
                <a href="/r3/products">MENU</a>
              </li>
              {/* <li>My account</li> */}
              {/* <li>Checkout</li> */}
              {/* <li>Cart</li> */}
              <li>
                <a href="/r3/return-policy">Return Policy</a>
              </li>
              <li>
                <a href="/r3/terms-of-use">Terms Of Use</a>
              </li>
            </ul>
          </div>
          <div className="footer-bot">
            <div className="fb-item-box">
              <div className="fb-item">
                <h1>ADDRESS</h1>
                <p>570 8th Ave, New York, NY 10018 United States</p>
              </div>

              <div className="fb-item">
                <h1>BOOK A TABLE</h1>
                <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
              </div>

              <div className="fb-item">
                <h1>OPENING HOURS</h1>
                <p>Monday – Friday: 8am – 4pm Saturday: 9am – 5pm</p>
              </div>

              <div className="fb-item">
                <h1>ADDRESS</h1>
                <p>570 8th Ave, New York, NY 10018 United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
