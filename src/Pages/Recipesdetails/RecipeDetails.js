import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context";
import "./RecipeDetails.css";
import Button from "react-bootstrap/Button";
import { Link, navigate } from "@reach/router";
import { Row, Col, Container } from "react-bootstrap";
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
      {selectedRecipe && (
        <div className="RecipeDetails">
          <Row>
            <Col xs={6} md={6}>
              <Link to={`/edit-recipe/${id}`}>
                <Button variant="secondary">Edit recipe</Button>
              </Link>
            </Col>
            <Col xs={6} md={6}>
              <Button
                variant="secondary"
                onClick={function () {
                  onDelete(id);
                }}
              >
                Delete recipe
              </Button>
            </Col>
          </Row>
          <div className="RecipeDetails-container">
            <h2>{selectedRecipe.name}</h2>
            <img
              src={selectedRecipe.imageUrl}
              className="RecipeDetails-main-image"
              alt={selectedRecipe.name}
            ></img>
            <ListIngredients arr={selectedRecipe.ingredients} />
            <div>{selectedRecipe.method}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
