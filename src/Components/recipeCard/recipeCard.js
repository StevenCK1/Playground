import { Row, Col, Card } from "react-bootstrap";
import { Link } from "@reach/router";

function ListRecipeCards({ arr }) {
  return (
    <Row className="justify-content-md-center">
      {arr.map((recipe) => (
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
  );
}

export default ListRecipeCards;
