import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";
import "./CreateRecipe.css";
import { Link } from "@reach/router";

function CreateRecipe() {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  const [name, setName] = useState();
  const [method, setMethod] = useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const onSave = () => {
    const newRecipe = {
      id: recipes[recipes.length - 1].id + 1,
      name: name,
      method: method,
      ingredients: [],
    };
    const updatedRecipes = [...recipes, newRecipe];
    dispatch({ type: "SET_RECIPES", recipes: updatedRecipes });
  };

  return (
    <div className="CreateRecipe">
      <h1>CreateRecipe</h1>
      <Link to={`/`}>Back to Recipes</Link>
      <div className="CreateRecipe-container">
        <div>
          <p>Name:</p>
          <input type="text" onChange={onNameChange}></input>
        </div>
        <div>
          <p>Method:</p>
          <input type="text" onChange={onMethodChange}></input>
        </div>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
}

export default CreateRecipe;
