import { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Recipes from "./Pages/Recipes";
import RecipeDetails from "./Pages/RecipeDetails";
import { GlobalProvider } from "./context";

let Dash = () => <div>Dash</div>;

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Recipes path="/" />
        <RecipeDetails path="/recipe-details/:id" />
      </Router>
    </GlobalProvider>
  );
}

export default App;
