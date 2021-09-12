import { useState } from "react";
import "./Recipes.css";
import Button from "../Components/Button.js";
import { Link } from "@reach/router";

function Recipes() {
  const receipeList = [
    {
      id: 0,
      name: "Pasta",
      imageUrl: "",
      method: "",
      ingredients: [
        {
          measurement: "100",
          unit: "grams",
          name: "spaghetti",
        },
      ],
    },
    {
      id: 1,
      name: "Pasta 2",
      imageUrl: "",
      method: "",
      ingredients: [
        {
          measurement: "100",
          unit: "grams",
          name: "spaghetti",
        },
      ],
    },
  ];

  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <div className="Recipes-container">
        {receipeList.map((recipe) => (
          <Link to={`/recipe-details/${recipe.id}`}>
            <div className="recipe">
              <div>{recipe.name}</div>
              <div>{recipe.id}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
