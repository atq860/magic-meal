import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
// import Rating from "../components/Rating";
import menus from "../data/menus";

const RestaurantView = ({ match, history }) => {
  return (
    <>
      <Link className="btn btn-info my-3" to="/">
        Go Back
      </Link>
      <Row>
        <h1></h1>
        {menus.map((menu) => (
          <Col sm={12} md={6} lg={4} xl={3} key={menu._id}>
            <Menu menu={menu} />
            {/* <h1>{product.name}</h1> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RestaurantView;
