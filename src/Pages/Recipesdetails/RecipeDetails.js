import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context";
import "./RecipeDetails.css";
import Button from "react-bootstrap/Button";
import { Link, navigate } from "@reach/router";
import ListIngredients from "../../Components/listIngredients/listIngredients";

function RecipeDetails({ id }) {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  // Mimicing an API call which returns the recipe data from the id in the url
  useEffect(() => {
    const recipe = recipes.find((r) => Number(r.id) === Number(id));
    setSelectedRecipe(recipe);
  }, []);

  function onDelete(id) {
    // need to find id in object and check what index it is
    const index = recipes.findIndex((object) => {
      return Number(object.id) === Number(id);
    });

    const updatedRecipes = [
      ...recipes.slice(0, index),
      ...recipes.slice(index + 1),
    ];
    dispatch({ type: "SET_RECIPES", recipes: updatedRecipes });
    navigate(`/`);
  }

  return (
    <div className="RecipeDetails-page">
      <h1 className="RecipeDetails"> Recipe Details</h1>

      {selectedRecipe && (
        <div className="RecipeDetails">
          <Link to={`/edit-recipe/${id}`}>
            <Button>Edit recipe</Button>
          </Link>
          <Button
            onClick={function () {
              onDelete(id);
            }}
          >
            Delete recipe
          </Button>
          <header className="RecipeDetails-header">
            <img
              src={selectedRecipe.imageUrl}
              className="RecipeDetails-main-image"
              alt={selectedRecipe.name}
            ></img>
            <div>{selectedRecipe.name}</div>
            <div>{selectedRecipe.method}</div>
            <ListIngredients arr={selectedRecipe.ingredients} />
          </header>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
