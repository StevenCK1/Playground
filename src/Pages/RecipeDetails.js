import { useState, useEffect } from "react";
import "./RecipeDetails.css";
import Button from "../Components/Button.js";

function RecipeDetails({ id }) {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const recipeList = [
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

  // Mimicing an API call which returns the recipe data from the id in the url
  useEffect(() => {
    const recipe = recipeList.find((r) => r.id == id);
    setSelectedRecipe(recipe);
  }, []);

  const [count, setCount] = useState(0);
  const addOne = function () {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <>
      {selectedRecipe && (
        <div className="RecipeDetails">
          <header className="RecipeDetails-header">
            <div>{selectedRecipe.name}</div>
            <h1>RecipeDetails</h1>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.svg"}
              className="RecipeDetails-logo"
              alt="logo"
            />
            <h1>{count}</h1>
            <p>
              Edit <code>src/RecipeDetails.js</code> and save to reload.
            </p>
            <a
              className="RecipeDetails-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Button addOne={addOne}></Button>
          </header>
        </div>
      )}
    </>
  );
}

export default RecipeDetails;
