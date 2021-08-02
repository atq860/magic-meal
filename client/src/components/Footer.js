import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "black" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Magic Meal</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
