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
import Rating from "../components/Rating";
import menus from "../data/menus";

const MenuView = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);

  const menu = menus.find((m) => m._id === match.params.id);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
    console.log("Menu ==> ", menu);
  };

  return (
    <>
      <Link className="btn btn-info my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={menu.image} alt={menu.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{menu.name}</h3>
            </ListGroup.Item>
            {/* <ListGroupItem>
              <Rating
                value={menu.rating}
                text={`${menu.rating} reviews`}
              />
            </ListGroupItem> */}
            <ListGroupItem>Price: ${menu.price}</ListGroupItem>
            {/* <ListGroupItem>Description: {menu.description}</ListGroupItem> */}
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${menu.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              {/* <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {menu.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem> */}

              {menu.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(menu.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}

              <ListGroupItem>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  // disabled={menu.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <br /> <br /> <br /> <br />
        </Col>
      </Row>
    </>
  );
};

export default MenuView;
