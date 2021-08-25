import { useState } from "react";
import "./Recipes.css";
import Button from "../Components/Button.js";

function Recipes() {
  const [count, setCount] = useState(0);
  const addOne = function () {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="Recipes">
      <header className="Recipes-header">
        <h1>Recipes</h1>
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          className="Recipes-logo"
          alt="logo"
        />
        <h1>{count}</h1>
        <p>
          Edit <code>src/Recipes.js</code> and save to reload.
        </p>
        <a
          className="Recipes-link"
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

export default Recipes;
