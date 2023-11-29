import React from "react";
import "./itemdetails.css";
import { Link } from "react-router-dom";
const ItemDetails = () => {
  const currentUrl = window.location.href;
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Link to="/r3/recipe">go back</Link>
    </div>
  );
};

export default ItemDetails;
