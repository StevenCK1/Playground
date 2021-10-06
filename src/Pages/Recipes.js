import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";
import "./Recipes.css";
import { Link } from "@reach/router";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";

function Recipes() {
  const { state, dispatch } = useContext(GlobalContext);
  const { recipes } = state;
  return (
    <div className="Recipes">
      <div className="Recipes-container">
        <Container>
          <Row className="justify-content-md-center">
            {recipes.map((recipe) => (
              <Col className="p-3" xs={6} md={4}>
                <Link
                  to={`/recipe-details/${recipe.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={recipe.imageUrl}
                      className="thumbnail-image"
                    />
                    <Card.Body>
                      <Card.Title>{recipe.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Recipes;
