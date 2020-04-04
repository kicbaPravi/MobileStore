import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import {
  Wrapper,
  Picture,
  Info,
  ButtonWrapper
} from "../styledComponents/layout/styled_detail";
import { TitleContainer } from "../styledComponents/layout/title";
import { StyledButton } from "../styledComponents/layout/styled_product";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <Wrapper>
              <Picture>
                <img src={img} alt={title} />
              </Picture>
              <Info>
                <TitleContainer>{title}</TitleContainer>
                <div>
                  from<h2>{company}</h2>
                </div>

                <h3>${price}</h3>
                <p>{info}</p>
                <ButtonWrapper>
                  <Link to="/">
                    <StyledButton>Back to products</StyledButton>
                  </Link>

                  <StyledButton
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </StyledButton>
                </ButtonWrapper>
              </Info>
            </Wrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}
