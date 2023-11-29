import React from "react";
import "./recipe.css";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import ItemDetails from "../ItemDetails/ItemDetails";
const Recipe = () => {
  let [arr, setArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(true);
  const [value, setValue] = useState("");
  const func = async () => {
    const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${value}&excludeIngredients=cinnamon`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "df8e8b4bf7mshdfe817b6825f3eep110794jsn96ff29dc3876",
        "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    setArr(result);

    if (value) {
      setState(true);
    } else {
      setState(!state);
    }
  };

  useEffect(() => {});

  return (
    <div className="recipe">
      <input
        type="text"
        placeholder="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="button" onClick={func}>
        {" "}
        clivk
      </button>

      <ul>
        {state
          ? arr.map((i) => {
              return (
                <li key={Math.random() * 9999}>
                  <img src={i.image} alt="" />
                  <h3>{i.name}</h3>
                  <p>Fat: {i.nutrients.fat}g</p>
                  <p>Sugar: {i.nutrients.sugar}g</p>
                  <hr />
                  <div className="recipe-btn-box">
                    <Link to={`/r3/recipe/${i.id}`}>Details</Link>
                  </div>
                </li>
              );
            })
          : console.log(false)}
      </ul>

      {modal ? <h1>NIGGA</h1> : <h2>WHITE</h2>}
    </div>
  );
};

export default Recipe;
