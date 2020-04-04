import React from "react";
import {
  CartContainer,
  Column
} from "../../styledComponents/layout/styled_cart";

export default function CartColumns() {
  return (
    <CartContainer>
      <Column>
        <h3>product</h3>
      </Column>
      <Column>
        <h3>name of product</h3>
      </Column>
      <Column>
        <h3>price</h3>
      </Column>
      <Column>
        <h3>quantity</h3>
      </Column>
      <Column>
        <h3>remove</h3>
      </Column>
      <Column>
        <h3>total</h3>
      </Column>
    </CartContainer>
  );
}
