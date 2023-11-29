import React from "react";
import "./menus.css";

import { FaRegComment } from "react-icons/fa";
const Menus = () => {
  return (
    <div className="menus" id="menu">
      <div className="menus-container">
        <div className="menus-main">
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category-11-1.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">COMBO</div>
            <FaRegComment className="menus-i" />
          </div>
          {/*  */}
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category-22.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">KIDS MENUS</div>
            <FaRegComment className="menus-i" />
          </div>{" "}
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category3.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">BOX MEALS</div>{" "}
            <FaRegComment className="menus-i" />
          </div>{" "}
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category-44.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">BURGER</div>{" "}
            <FaRegComment className="menus-i" />
          </div>{" "}
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category5.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">DRINKS</div>{" "}
            <FaRegComment className="menus-i" />
          </div>{" "}
          <div className="menus-item">
            <div className="menus-item-img">
              <img
                src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/category-55.png"
                alt=""
              />
            </div>
            <div className="menus-item-text">COMBO</div>{" "}
            <FaRegComment className="menus-i" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
