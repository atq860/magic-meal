import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Restaurant = ({ restaurant }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/restaurant/${restaurant._id}`}>
        <Card.Img src={restaurant.image} variant="top" />
      </Link>

      <Card.Body>
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

        {/* <Card.Text as="h3">${restaurant.price}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Restaurant;
