import React from "react";
import "./IndividualProduct.css";
const IndividualProduct = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="text-center">{/* <h1>{product.author}</h1>  */}</div>
      <div className="flex items-center justify-center">
        <img
          src={`https://pizzaback-cews.onrender.com/images/${product.image}`}
          alt={product.name}
          className=" object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        {/* <p className="text-gray-600">{product.description}</p> */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price}
          </span>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
            onClick={() => alert(`Added ${product.name} to cart`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
