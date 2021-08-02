import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";

const CartView = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const checkoutHandler = () => {
    history.push("/shipping");
    // history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {/* <MenuView item={index} /> */}

        {/* {cartItems.length === 0 ? (
          <div>
            Your cart is Empty <Link to="/">Go Back</Link>
          </div>
        ) : ( */}

        <ListGroup variant="flush">
          {/* {cartItems.map((item) => ( */}
          <ListGroupItem>
            <Row>
              {/* <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col> */}

              {/* <Col md={2}>${item.price}</Col> */}
              <Col md={2}>Id: {productId}</Col>
              <Col md={2}>Quantity: {qty}</Col>

              {/* <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col> */}

              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                  // onClick={() => removeFromCartHandler(item.product)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
          {/* ))} */}
        </ListGroup>
        {/* )} */}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2> */}
              <h2>Subtotal ({qty}) items</h2>
              {/* {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} */}
            </ListGroup.Item>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={qty === 0}
                onClick={checkoutHandler}
              >
                Proceed To CheckOut
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartView;
