import { useState } from "react";
import "./RecipeDetails.css";
import Button from "../Components/Button.js";

function RecipeDetails() {
  const [count, setCount] = useState(0);
  const addOne = function () {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="RecipeDetails">
      <header className="RecipeDetails-header">
        <h1>RecipeDetail</h1>
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          className="RecipeDetail-logo"
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
  );
}

export default RecipeDetail;
