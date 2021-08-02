import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Restaurant from "../components/Restaurant";
import products from "../products";
import restaurants from "../data/restaurants";

const HomeView = () => {
  return (
    <>
      <Row>
        {restaurants.map((restaurant) => (
          <Col sm={12} md={6} lg={3} xl={3} key={restaurant._id}>
            <Restaurant restaurant={restaurant} />
            {/* <h1>{product.name}</h1> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeView;
