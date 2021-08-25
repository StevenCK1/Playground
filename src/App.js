import { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Recipes from "./Pages/Recipes";

let Dash = () => <div>Dash</div>;

function App() {
  return (
    <Router>
      <Recipes path="/" />
      <Dash path="/recipe-details" />
    </Router>
  );
}

export default App;
