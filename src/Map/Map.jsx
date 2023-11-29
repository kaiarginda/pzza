import React from "react";
import "./Map.css"; // You can remove this line if not needed
const Map = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Website Map</h2>

      <div className="bg-white mt-6 p-6 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-4">Instructions:</h3>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            You can create your pizza by going to all products page and then
            click create pizza.
          </li>
          <li className="mb-2"></li>
          {/* Add more instructions as needed */}
        </ol>
      </div>
    </div>
  );
};

export default Map;
