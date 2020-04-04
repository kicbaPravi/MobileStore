import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import {
  ModalContainer,
  ModalItem
} from "../styledComponents/layout/styled_modalContainer";
import { StyledButton } from "../styledComponents/layout/styled_product";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <ModalItem>
                  <h1>Item Added To The Cart</h1>
                  <img src={img} alt={title} />
                  <h2>{title}</h2>
                  <h3>${price}</h3>
                  <Link to="/">
                    <StyledButton onClick={() => closeModal()}>
                      continue shopping
                    </StyledButton>
                  </Link>
                  <Link to="/cart">
                    <StyledButton cart onClick={() => closeModal()}>
                      go to cart
                    </StyledButton>
                  </Link>
                </ModalItem>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
