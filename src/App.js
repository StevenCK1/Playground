import { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Recipes from "./Pages/Recipes";
import RecipeDetails from "./Pages/RecipeDetails";
import { GlobalProvider } from "./context";
import CreateRecipe from "./Pages/CreateRecipe";

let Dash = () => <div>Dash</div>;

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Recipes path="/" />
        <RecipeDetails path="/recipe-details/:id" />
        <CreateRecipe path="/create-recipe" />
      </Router>
    </GlobalProvider>
  );
}

export default App;
