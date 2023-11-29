// PizzaDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const PizzaDetails = () => {
  const { pizzaId } = useParams();
  const [pizzaData, setPizzaData] = useState(null);

  useEffect(() => {
    // Fetch pizza data by pizzaId from your backend API
    // Example: fetch(`/api/pizzas/${pizzaId}`)

    // async function fetchData() {
    //   await fetch("http://localhost:5000/v1/get-pizzas");
    //   //   .then(response => response.json())
    //   //   .then(data => setPizzaData(data));
    // }
    // fetchData();
    const dummyPizzaData = {
      picture:
        "https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-p4-300x300.png",
      price: "12.99",
      name: "Delicious Pizza",
      description: "A tasty pizza with a great description.",
      comments: [
        { id: 1, text: "Yummy!", user: "User1" },
        { id: 2, text: "Best pizza ever!", user: "User2" },
      ],
      recommendedPizzas: [
        { id: 3, name: "Vegetarian Delight" },
        { id: 4, name: "Pepperoni Paradise" },
      ],
    };
    setPizzaData(dummyPizzaData);
  }, [pizzaId]);

  if (!pizzaData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white p-8 animate-fade-in">
      <img
        src={pizzaData.picture}
        alt={pizzaData.name}
        className="mb-4 rounded-lg shadow-md animate-bounce"
      />
      <h2 className="text-4xl font-semibold mb-2 text-green-500 animate__animated animate__bounceInDown">
        {pizzaData.name}
      </h2>
      <p className="text-xl mb-4">${pizzaData.price}</p>
      <p className="text-gray-300 mb-8">{pizzaData.description}</p>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <ul className="list-disc pl-6">
          {pizzaData.comments.map((comment) => (
            <li
              key={comment.id}
              className="text-lg animate__animated animate__fadeIn"
            >
              <strong>{comment.user}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Recommended Pizzas</h3>
        <ul className="list-disc pl-6">
          {pizzaData.recommendedPizzas.map((recommendedPizza) => (
            <li
              key={recommendedPizza.id}
              className="text-lg animate__animated animate__fadeIn"
            >
              {recommendedPizza.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaDetails;
