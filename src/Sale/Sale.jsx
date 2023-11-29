import React from "react";
import "./sale.css";
const Sale = () => {
  return (
    <div className="sale" id="sales">
      <div className="sale-container">
        <div className="sale-main">
          <div className="ls-bg"></div>
          <div className="flex-2">
            <div className="sale-left">
              <h4>GET UP TO</h4>
              <h2>50%</h2>
              <p>OFF</p>
            </div>
            <div className="sale-right">
              <h4>HOT FRESH</h4>
              <h1>
                CHEESE <br /> PIZZA
              </h1>
              <button type="button">ORDER NOW</button>
            </div>
          </div>

          <div className="ls-bg-1 ls-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
