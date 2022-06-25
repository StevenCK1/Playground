import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import "./Recipes.css";
import { Container } from "react-bootstrap";
import ListRecipeCards from "../../Components/recipeCard/recipeCard";

function Recipes() {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  return (
    <div className="Recipes">
      <div className="Recipes-container">
        <Container>
          <ListRecipeCards arr={recipes} />
        </Container>
      </div>
    </div>
  );
}

export default Recipes;
