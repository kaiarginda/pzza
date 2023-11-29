import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./ReviewPage.css";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  const [cookie, setCookie] = useState("");

  const [loggedUser, setLoggedUser] = useState(null);

  const [author, setAuthor] = useState(loggedUser?.name);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get("token");
    if (cookieValue) setCookie(cookieValue);
    setCookie(cookieValue);
    const getLoggedUser = async () => {
      try {
        const response = await fetch(
          "https://pizzaback-cews.onrender.com/v1/getLoggedUser",
          {
            method: "POST",
            headers: {
              // "Content-type": "multipart/form-data",
              "Content-type": "Application/json",
            },
            credentials: "include", // Include cookies
            xhrFields: {
              withCredentials: true,
            },
            // body: { ...formData, price, description, name },
            body: JSON.stringify({ token: cookie }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoggedUser(data.user);
        setAuthor(data.user.name);
        // Log data after the fetch operation is complete
      } catch (error) {}
    };
    getLoggedUser();
  }, [cookie, author, loggedUser]);
  //   console.log(author, "author");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loggedUser) {
      alert("Log In To Write Review");
      return;
    }
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://pizzaback-cews.onrender.com/v1/review",
        {
          method: "POST",
          headers: {
            // "Content-type": "multipart/form-data",
            "Content-type": "Application/json",
          },
          credentials: "include", // Include cookies
          xhrFields: {
            withCredentials: true,
          },
          // body: { ...formData, price, description, name },
          body: JSON.stringify({ rating, reviewText, author }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setSuccess(true);

      const data = await response.json();
      setLoggedUser(data.user);
      setAuthor(data.user.name);
      // Log data after the fetch operation is complete
    } catch (error) {}

    // Clear the form after submission
    setLoading(false);

    setReviewText("");
    setRating(0);
  };
  console.log(loggedUser, "currenlty logged user");
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      {/* {success ? <div>Review Added Succesfully</div> : null} */}
      {success ? (
        <div className="bg-green-500 text-white px-4 py-2 rounded">
          Review Added Successfully
        </div>
      ) : null}

      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="max-w-md ">
          <div className="mb-4 ">
            <label
              htmlFor="review"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Review:
            </label>
            <textarea
              id="review"
              name="review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating:
            </label>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={() => handleRatingChange(value)}
                    checked={value === rating}
                    className="hidden"
                  />
                  <FaStar
                    className={`text-xl ${
                      value <= rating ? "text-yellow-500" : "text-gray-300"
                    } inline-block`}
                  />
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin
              height="40"
              width="40"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : null}
      </div>
      <div className="p-5">
        <a href="/r3">Go Back To The Home Page</a>
      </div>
    </div>
  );
};

export default ReviewPage;
