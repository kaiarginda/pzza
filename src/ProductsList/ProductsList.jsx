import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import IndividualProduct from "../IndividualProduct/IndividualProduct";
const ProductsList = () => {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://pizzaback-cews.onrender.com/v1/get-products"
        );

        console.log("Response status:", response.status);
        console.log("Response OK:", response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data:", data);
        setProductData(data);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    getProducts();
  }, []);
  const [productData, setProductData] = useState([]);

  const productsPerRow = 3;
  const [visibleRows, setVisibleRows] = useState(1);

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {productData
          .slice(0, visibleRows * productsPerRow)
          .map((product, index) => (
            <IndividualProduct key={index} product={product} />
          ))}
      </div>
      {visibleRows * productsPerRow < productData.length && (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      <div className="p-5 flex gap-4 justify-center items-center">
        <a href="/r3">Go Back To The Dashboard</a>
        <a
          href="/r3/create"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-block transition-all duration-300"
        >
          Create Your Own
        </a>
      </div>
    </div>
  );
};

export default ProductsList;
