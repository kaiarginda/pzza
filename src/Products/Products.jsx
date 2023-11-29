import React from "react";
import "./products.css";
import { BsCart } from "react-icons/bs";
const Products = () => {
  return (
    <div className="products" id="product">
      <div className="products-container">
        <div className="products-main">
          <div className="products-text">
            <h1>FRESH FROM PIZZON</h1>
            <hr />
            <p>
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac…
            </p>
          </div>
          <div className="products-content">
            <div className="products-item">
              <div className="products-item-image">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p1-300x300.png"
                  alt=""
                />
              </div>

              <div className="products-item-content">
                <div className="products-item-text">
                  <h3>Valdostana Pizza</h3>
                  <p>£15.00</p>
                </div>
                <div className="products-item-icon">
                  <BsCart className="pr-item-i" />
                </div>
              </div>
            </div>
            {/*  */}

            <div className="products-item">
              <div className="products-item-image">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p4-300x300.png"
                  alt=""
                />
              </div>

              <div className="products-item-content">
                <div className="products-item-text">
                  <h3>Vegetarian Pizza</h3>
                  <p>£15.00</p>
                </div>
                <div className="products-item-icon">
                  <BsCart className="pr-item-i" />
                </div>
              </div>
            </div>

            <div className="products-item">
              <div className="products-item-image">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p2-300x300.png"
                  alt=""
                />
              </div>

              <div className="products-item-content">
                <div className="products-item-text">
                  <h3>Margherita Pizza</h3>
                  <p>£15.00</p>
                </div>
                <div className="products-item-icon">
                  <BsCart className="pr-item-i" />
                </div>
              </div>
            </div>

            <div className="products-item">
              <div className="products-item-image">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p3-300x300.png"
                  alt=""
                />
              </div>

              <div className="products-item-content">
                <div className="products-item-text">
                  <h3>Double Cheese Pizza</h3>
                  <p>£15.00</p>
                </div>
                <div className="products-item-icon">
                  <BsCart className="pr-item-i" />
                </div>
              </div>
            </div>
          </div>
          <div className="products-btn">
            <button type="button">
              <a href="/r3/products">ALL PRODUCTS</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
