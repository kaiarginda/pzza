// // import React, { useEffect, useState } from "react";
// // import "./ReviewList.css"; // Make sure to specify the correct file extension
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import IndividualReview from "../IndividualReview/IndividualReview";

// // const ReviewList = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchReviews = async () => {
// //       try {
// //         const response = await fetch("http://localhost:5000/v1/getReviews");
// //         if (response.ok) {
// //           const dat = await response.json();
// //           setData(dat.reviews);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching reviews:", error);
// //       }
// //     };

// //     fetchReviews();
// //   }, []); // Empty dependency array to run the effect once on mount

// //   const sliderSettings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     centerMode: true,
// //     centerPadding: "0",
// //   };

// //   return (
// //     <Slider {...sliderSettings}>
// //       {data?.map((rev, index) => (
// //         <div key={index} className="carousel-item">
// //           <IndividualReview
// //             stars={rev.stars}
// //             text={rev.text}
// //             author={rev.author}
// //           />
// //         </div>
// //       ))}
// //     </Slider>
// //   );
// // };

// // export default ReviewList;
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import IndividualReview from "../IndividualReview/IndividualReview";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const ReviewList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/v1/getReviews");
//         if (response.ok) {
//           const dat = await response.json();
//           setData(dat.reviews);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []); // Empty dependency array to run the effect once on mount

//   const CustomPrevArrow = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none"
//     >
//       <FaArrowLeft className="text-2xl" />
//     </button>
//   );

//   const CustomNextArrow = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
//     >
//       <FaArrowRight className="text-2xl" />
//     </button>
//   );

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0",
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <Slider {...sliderSettings} className="relative">
//       {data?.map((rev, index) => (
//         <div key={index} className="carousel-item">
//           <IndividualReview
//             key={rev.id} // Make sure to use a unique key
//             stars={rev.stars}
//             text={rev.text}
//             author={rev.author}
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ReviewList;
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndividualReview from "../IndividualReview/IndividualReview";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReviewList = () => {
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/v1/getReviews");
        if (response.ok) {
          const dat = await response.json();
          setData(dat.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...sliderSettings}>
        {data?.map((rev) => (
          <div key={rev.id} className="carousel-item">
            <IndividualReview
              key={rev.id}
              stars={rev.stars}
              text={rev.text}
              author={rev.author}
            />
          </div>
        ))}
      </Slider>
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none cursor-pointer"
      >
        <FaArrowLeft className="text-2xl" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none cursor-pointer"
      >
        <FaArrowRight className="text-2xl" />
      </button>
    </div>
  );
};

export default ReviewList;
