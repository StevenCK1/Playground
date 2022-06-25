import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context";
import "./CreateRecipe.css";
import { Link, navigate } from "@reach/router";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import ListIngredients from "../../Components/listIngredients/listIngredients";
import InputField from "../../Components/inputField/inputField";

function CreateRecipe({ id }) {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  const [recipe, setRecipe] = useState();
  const [name, setName] = useState();
  const [method, setMethod] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsName, setIngredientsName] = useState();
  const [ingredientsUnit, setIngredientsUnit] = useState();
  const [ingredientsMeasure, setIngredientsMeasure] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // fetch data from api in order (separate object in properties)

    // set isEditing layout based on if the recipe is new? (if ID is in database)
    if (id) {
      setIsEditing(true);
      const recipe = recipes.find((r) => r.id == id);
      setRecipe(recipe);
      setName(recipe.name);
      setMethod(recipe.method);
      setIngredients(recipe.ingredients);
    }
  }, []);

  // saves state of inputFields
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const onIngredientsMeasureChange = (e) => {
    setIngredientsMeasure(e.target.value);
  };

  const onIngredientsUnitChange = (e) => {
    setIngredientsUnit(e.target.value);
  };

  const onIngredientsNameChange = (e) => {
    setIngredientsName(e.target.value);
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
    //if isEditing delete the previous recipe
    // if statement to check if is Editing andif yes delete previous data
    const recipeList = isEditing
      ? recipes.filter((r) => r.id !== parseInt(id, 10))
      : [...recipes];
    const newRecipe = {
      ...recipe,
      id: recipes[recipes.length - 1].id + 1,
      name: name,
      method: method,
      ingredients: ingredients,
    };
    const updatedRecipes = [...recipeList, newRecipe];
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
    <div className="CreateRecipe-page">
      <div className="CreateRecipe">
        {isEditing && (
          <>
            <h1>{isEditing ? "Edit Recipe" : "Create Recipe"}</h1>
          </>
        )}
        {!isEditing && (
          <>
            <h1>{isEditing ? "Edit Recipe" : "Create Recipe"}</h1>
            <Link to={`/`}>Back to Recipes</Link>
          </>
        )}
        <div className="CreateRecipe-container">
          <InputField
            labelTitle="Name"
            value={name}
            callFunction={onNameChange}
          />
          <InputField
            labelTitle="Method"
            value={method}
            callFunction={onMethodChange}
          />
          <InputField
            labelTitle="Ingredients measurement"
            value={ingredientsMeasure}
            callFunction={onIngredientsMeasureChange}
          />
          <InputField
            labelTitle="Ingredients unit"
            value={ingredientsUnit}
            callFunction={onIngredientsUnitChange}
          />
          <InputField
            labelTitle="Ingredients name"
            value={ingredientsName}
            callFunction={onIngredientsNameChange}
          />
          <div>
            <button onClick={onSaveIngredients}>Add ingredient</button>
          </div>
          {ingredients.length > 0 && (
            <ListIngredients
              arr={ingredients}
              callFunction={onDeleteIngredient}
            />
          )}
        </div>
        <div>
          <Row>
            <Col xs={12} md={6}>
              <Button onClick={onSave}>Save</Button>
            </Col>
            <Col xs={12} md={6}>
              <Link to={`/recipe-details/${id}`}>
                <Button> Cancel</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;
