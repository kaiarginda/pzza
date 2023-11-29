import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-main">
          <div className="testimonial-text">
            <h2>WHAT YOUR CLIENT SAYS</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              blandit arcu in pretium molestie. Interdum et malesuada fames ac.
            </p>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-item">
              <div className="testi-top">
                <div className="test-top-left">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/dct-testimonial-3.jpg"
                    alt=""
                  />

                  <div className="testi-top-left-text">
                    <h2>CLARA</h2>
                    <p>Design</p>
                  </div>
                </div>
                <div className="test-top-right">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="testi-bottom">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testi-top">
                <div className="test-top-left">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/dct-testimonial-2.jpg"
                    alt=""
                  />

                  <div className="testi-top-left-text">
                    <h2>JOHN DOE</h2>
                    <p>Design</p>
                  </div>
                </div>
                <div className="test-top-right">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="testi-bottom">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testi-top">
                <div className="test-top-left">
                  <img
                    src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/dct-testimonial-1.jpg"
                    alt=""
                  />

                  <div className="testi-top-left-text">
                    <h2>NINA MARGARET</h2>
                    <p>CEO,apple</p>
                  </div>
                </div>
                <div className="test-top-right">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="testi-bottom">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-4 justify-center">
        <button>
          {" "}
          <a href="/r3/testimonial">See All Reviews</a>
        </button>

        <button>
          {" "}
          <a href="/r3/review">Write Your Review</a>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
