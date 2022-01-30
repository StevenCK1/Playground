import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";
import "./CreateRecipe.css";
import { Link, navigate } from "@reach/router";
import Button from "react-bootstrap/Button";

function CreateRecipe({ id }) {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  const [name, setName] = useState();
  const [method, setMethod] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsName, setIngredientsName] = useState();
  const [ingredientsUnit, setIngredientsUnit] = useState();
  const [ingredientsMeasure, setIngredientsMeasure] = useState();
  const [isEditing, setIsEditing] = useState()

  useEffect(() => {
    // fetch data from api in order (separate object in properties)
    // set isEditing layout based on if the recipe is new? (if ID is in database)

  }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const onSaveIngredients = (e) => {
    // 1. create ingredients object

    const NewIngredient = {
      measurement: ingredientsMeasure,
      unit: ingredientsUnit,
      name: ingredientsName,
    };

    // 2. method to add object into the array
    const updatedIngredients = [...ingredients, NewIngredient];

    // 3. save the state
    setIngredients(updatedIngredients);

    // 4. display ingredient on screen

    // 5. clear all box
    setIngredientsName("");
    setIngredientsUnit("");
    setIngredientsMeasure("");
  };

  const onSave = () => {
    const newRecipe = {
      id: recipes[recipes.length - 1].id + 1,
      name: name,
      method: method,
      ingredients: ingredients,
    };
    const updatedRecipes = [...recipes, newRecipe];
    dispatch({ type: "SET_RECIPES", recipes: updatedRecipes });
    navigate(`/`);
  };

  const onDeleteIngredient = (index) => {
    const updatedIngredients = ingredients.filter(
      (ingredient, idx) => idx !== index
    );
    setIngredients(updatedIngredients);
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
        <p>Ingredients measurement:</p>

        <input
          type="text"
          value={ingredientsMeasure}
          onChange={(e) => setIngredientsMeasure(e.target.value)}
        ></input>
        <div>
          <p>Ingredients unit:</p>

          <input
            type="text"
            value={ingredientsUnit}
            onChange={(e) => setIngredientsUnit(e.target.value)}
          ></input>

          <p>Ingredients name:</p>
          <input
            type="text"
            value={ingredientsName}
            onChange={(e) => setIngredientsName(e.target.value)}
          ></input>
          <div>
            <button onClick={onSaveIngredients}>Add ingredient</button>
          </div>
          <div>
            {ingredients.length > 0 &&
              ingredients.map((ingredient, index) => (
                <div onClick={() => onDeleteIngredient(index)}>
                  {ingredient.measurement} {ingredient.unit} {ingredient.name}
                </div>
              ))}
          </div>
        </div>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}

export default CreateRecipe;
