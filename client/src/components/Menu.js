import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({ menu }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/menu/${menu._id}`}>
        <Card.Title as="div">
          <strong>{menu.name}</strong>
        </Card.Title>
        {/* <Card.Img src={menu.image} variant="top" /> */}
      </Link>

      {/* <Card.Body>
        <Link to={`/menu/${menu._id}`}>
          <Card.Title as="div">
            <strong>{menu.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={menu.rating}
            text={`${menu.rating} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body> */}
    </Card>
  );
};

export default Menu;
