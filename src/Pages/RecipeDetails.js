import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";
import "./RecipeDetails.css";

function RecipeDetails({ id }) {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  // Mimicing an API call which returns the recipe data from the id in the url
  useEffect(() => {
    const recipe = recipes.find((r) => r.id == id);
    setSelectedRecipe(recipe);
  }, []);

  return (
    <>
      <div className="RecipeDetails"> Recipe Details</div>

      {selectedRecipe && (
        <div className="RecipeDetails">
          <header className="RecipeDetails-header">
            <div>{selectedRecipe.name}</div>
            <div>{selectedRecipe.method}</div>
            <div>{selectedRecipe.imageUrl}</div>
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
