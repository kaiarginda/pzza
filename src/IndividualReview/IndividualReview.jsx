import React from "react";
import "./IndividualReview.css";
const IndividualReview = ({ text, stars, author }) => {
  // const renderStars = () => {
  //   const starArray = Array.from({ length: stars }, (_, index) => index + 1);

  //   return starArray.map((value) => (
  //     <h1 key={Math.random()}>⭐</h1>
  //     //   <FaStar key={value} className="text-yellow-500" />
  //   ));
  // };

  const renderStars = () => {
    const starArray = Array.from({ length: stars }, (_, index) => index + 1);

    return starArray.map((index) => (
      <h1 key={index}>⭐</h1>
      // Alternatively, you can use a unique identifier if available:
      // <h1 key={generateUniqueId()}>⭐</h1>
    ));
  };

  return (
    <div className="testimonial-item flex flex-col w-[100%]  justify-center items-center">
      <div className="testi-top flex justify-between w-[100%]">
        <div className="test-top-left ">
          <img
            src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/dct-testimonial-2.jpg"
            alt=""
          />

          <div className="testi-top-left-text">
            <h2>{author}</h2>
            <p>Design</p>
          </div>
        </div>
        <div className="test-top-right flex gap-1">{renderStars()}</div>
      </div>
      <div className="testi-bottom text-left w-[100%]">{text}</div>
    </div>
  );
};

export default IndividualReview;
