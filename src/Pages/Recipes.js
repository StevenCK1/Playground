import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";
import "./Recipes.css";
import { Link } from "@reach/router";

function Recipes() {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <div className="Recipes-container">
        {recipes.map((recipe) => (
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
