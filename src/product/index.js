import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img from "../images/product.jpg";

const Product = ({ product, setSelectedProducts }) => {
  const handleChange = () => {
    setSelectedProducts(product);
  };

  return (
    <Col className="card" xs={12} md={3}>
      <Card.Img className="pt-4 border-2" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{product.price} TL</Card.Title>
        <Card.Text>{product.name}</Card.Text>
        <Button variant="primary" onClick={handleChange}>
          Add to Basket
        </Button>
      </Card.Body>
    </Col>
  );
};
export default Product;
