import { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Recipes from "./Pages/Recipes";
import RecipeDetails from "./Pages/RecipeDetails";
import { GlobalProvider } from "./context";
import CreateRecipe from "./Pages/CreateRecipe";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <GlobalProvider>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Recipes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create-recipe">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Recipes path="/" />
        <RecipeDetails path="/recipe-details/:id" />
        <CreateRecipe path="/create-recipe" />
        <CreateRecipe path="/edit-recipe/:id" />
      </Router>
    </GlobalProvider>
  );
}

export default App;
