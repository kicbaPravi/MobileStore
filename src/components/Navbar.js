import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaShoppingCart } from "react-icons/fa";
import {
  Header,
  Container,
  Logo,
  Products,
  Cart,
  Button
} from "../styledComponents/layout/styled_header";

export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <Container>
          <Logo>
            <Link to="/">
              <FaPhone size={50} color={"#ffa400"} />
            </Link>
          </Logo>
          <Products>
            <Link to="/">
              <h1>Mobile Store</h1>
            </Link>
          </Products>
          <Cart>
            <Link to="/cart">
              <Button>
                <FaShoppingCart size={44} color={"#ffa400"} />
                <span>Shoping Cart</span>
              </Button>{" "}
            </Link>
          </Cart>
        </Container>
      </Header>
    );
  }
}
