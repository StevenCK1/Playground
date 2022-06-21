import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context";
import "./RecipeDetails.css";
import Button from "react-bootstrap/Button";
import { Link, navigate } from "@reach/router";

function RecipeDetails({ id }) {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  // Mimicing an API call which returns the recipe data from the id in the url
  useEffect(() => {
    const recipe = recipes.find((r) => r.id == id);
    setSelectedRecipe(recipe);
  }, []);

  //delete recipe
  function onDelete(id) {
    debugger;
    const updatedRecipes = [...recipes.slice(0, id), ...recipes.slice(id + 1)];
    dispatch({ type: "SET_RECIPES", recipes: updatedRecipes });
    navigate(`/`);
  }

  return (
    <>
      <div className="RecipeDetails"> Recipe Details</div>

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
            ></img>
            <div>{selectedRecipe.name}</div>
            <div>{selectedRecipe.method}</div>
            <div>
              {selectedRecipe.ingredients.map((item, index) => {
                return (
                  <div>
                    <p>{`${item.measurement} ${item.unit} ${item.name}`}</p>
                  </div>
                );
              })}
            </div>
          </header>
        </div>
      )}
    </>
  );
}

export default RecipeDetails;
