import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartView from "./views/CartView";
import ShippingView from "./views/ShippingView";
import PaymentView from "./views/PaymentView";
import PlaceOrderView from "./views/PlaceOrderView";
import RestaurantView from "./views/RestaurantView";
import MenuView from "./views/MenuView";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeView} exact />
          <Route path="/shipping" component={ShippingView} exact />
          <Route path="/payment" component={PaymentView} exact />
          <Route path="/placeorder" component={PlaceOrderView} exact />
          <Route path="/restaurant/:id" component={RestaurantView} />
          <Route path="/menu/:id" component={MenuView} />
          <Route path="/cart/:id?" component={CartView} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
