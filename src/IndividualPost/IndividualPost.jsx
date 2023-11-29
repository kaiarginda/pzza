import React, { useEffect, useState } from "react";

const IndividualPost = ({ name, description, image, id }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://pizzaback-cews.onrender.com/v1/comments-quantity",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setQuantity(data);
      }
    };
    fetchComments();
  }, []);

  // Trim the description to a certain length (adjust as needed)
  const trimmedDescription = description.substring(0, 150);

  return (
    <div className="news-item relative flex flex-col h-full">
      <div className="news-item-top">
        <img
          className="w-full h-[217.5px] object-cover"
          src={`https://pizzaback-cews.onrender.com/images/${image}`}
          alt=""
        />
      </div>

      <div className="news-item-bottom flex flex-col justify-between flex-1 p-4">
        <div>
          <p className="pb-2 text-2xl font-bold">{name}</p>
          <h3 className="mb-4">
            <span className="color-gray">Aug 30, 2023</span>
            <span className="news-i-bot-text">Fast Food</span>
            <p className="color-gray">{quantity} Comments</p>
          </h3>
          <p className="line-clamp-3">{trimmedDescription}</p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            <a href={`/r3/post/${id}`}>READ MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
