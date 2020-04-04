import React from "react";
import { Link } from "react-router-dom";
import {
  CtContainer,
  ClearButton
} from "../../styledComponents/layout/styled_cart";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <CtContainer>
      <Link to="/">
        <ClearButton onClick={() => clearCart()}>Clear Cart</ClearButton>
        <h2>Subtotal : $ {cartSubtotal} </h2>
        <h2>Tax : $ {cartTax}</h2>
        <h1>Total : $ {cartTotal}</h1>
      </Link>
    </CtContainer>
  );
}
