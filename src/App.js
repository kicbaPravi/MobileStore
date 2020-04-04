import React from "react";
import { GlobalStyle, Wrapper } from "./styledComponents/base/globalStyle";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/cart/Cart";
import Details from "./components/Details";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar></Navbar>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Wrapper>
    </>
  );
}

export default App;
