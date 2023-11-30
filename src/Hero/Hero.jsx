import React from "react";
import "./hero.css";
import { useRef, useEffect } from "react";
const Hero = () => {
  const n = useRef("");
  const r = useRef("");

  const pizzaImg = useRef("");
  const animationImg = useRef("");
  const scroll = useRef("");
  useEffect(() => {
    n.current = 0;

    r.current = 0;
    pizzaImg.current = document.querySelector(".hero-pizza");
    animationImg.current = document.querySelector(".img-animation");

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1000) {
        if (window.scrollY > scroll.current) {
          if (window.scrollY < 500) {
            n.current += 1;
            r.current += -0.4;
            animationImg.current.style.transform = `translateY(${n.current}px)`;
            pizzaImg.current.style.rotate = `${r.current}deg`;
          }

          if (window.scrollY >= 500) {
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }
        } else {
          if (window.scrollY < 500) {
            r.current += 0.4;
            n.current += -1;
            pizzaImg.current.style.rotate = `${r.current}deg`;
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }

          if (window.scrollY >= 500) {
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }
        }

        // scroll.current = window.scrollY;
      } else {
        if (window.scrollY > scroll.current) {
          if (window.scrollY < 1140) {
            n.current += 1;
            r.current += -0.4;
            animationImg.current.style.transform = `translateY(${n.current}px)`;
            pizzaImg.current.style.rotate = `${r.current}deg`;
          }

          if (window.scrollY >= 1140) {
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }
        } else {
          if (window.scrollY < 1140) {
            r.current += 0.4;
            n.current += -1;
            pizzaImg.current.style.rotate = `${r.current}deg`;
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }

          if (window.scrollY >= 1140) {
            animationImg.current.style.transform = `translateY(${n.current}px)`;
          }
        }

        // scroll.current = window.scrollY;
      }

      scroll.current = window.scrollY;
    });
  });

  return (
    <div className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-bg"></div>
            <div className="h-lr">
              <div className="hero-left">
                <h2>
                  UNLIMITED <br />
                  MEDIUM <span>PIZZAS</span>
                </h2>
                <h4>Medium 2-topping* pizza</h4>
                <p>
                  *Additional charge for premium toppings. Minimum of 2
                  required.
                </p>
                <div className="hero-left-box">
                  <button type="button">ORDER NOW</button>
                  <p>12.99$$</p>
                </div>
              </div>
              <div className="hero-right">
                <div className="hero-right-container">
                  <div className="hero-right-main">
                    <div className="hero-right-pizza">
                      <img
                        className="hero-pizza"
                        src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p1.png"
                        alt=""
                      />
                    </div>
                    <div className="hero-right-animation">
                      <img
                        className="img-animation"
                        src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="hero-bot-button-box">
            <button type="button">
              <a href="/r3/products">MENUS</a>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bot-bg"></div>
    </div>
  );
};

export default Hero;
