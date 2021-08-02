import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Rating from "./Rating";

const Menu = ({ menu }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/menu/${menu._id}`}>
        <Card.Title as="div">
          <strong>{menu.name}</strong>
        </Card.Title>
        {/* <Card.Img src={restaurant.image} variant="top" /> */}
      </Link>

      {/* <Card.Body>
        <Link to={`/restaurant/${restaurant._id}`}>
          <Card.Title as="div">
            <strong>{restaurant.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={restaurant.rating}
            text={`${restaurant.rating} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body> */}
    </Card>
  );
};

export default Menu;
