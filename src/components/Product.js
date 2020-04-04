import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledProduct,
  StyledPrice,
  StyledButton
} from "../styledComponents/layout/styled_product";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductConsumer>
        {value => (
          <StyledProduct onClick={() => value.handleChange(id)}>
            <Link to="/details">
              <img src={img} alt={title}></img>
            </Link>

            <h3>{title}</h3>
            <StyledPrice>${price}</StyledPrice>
            <p></p>
            <StyledButton
              onClick={() => {
                value.addToCart(id);
                value.openModal(id);
              }}
            >
              {inCart ? "in cart" : <FaCartPlus />}
            </StyledButton>
          </StyledProduct>
        )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
