import React from "react";
import {
  RowContainer,
  Column,
  ButtonContainer,
  Button,
  CartIcon
} from "../../styledComponents/layout/styled_cart";
import { FaTrashAlt } from "react-icons/fa";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <RowContainer>
      <Column>
        <img src={img} alt={title} />
      </Column>
      <Column>{title}</Column>
      <Column>$ {price}</Column>
      <Column>
        <ButtonContainer>
          <Button onClick={() => increment(id)}>+</Button>
          {count}
          <Button onClick={() => decrement(id)}>-</Button>
        </ButtonContainer>
      </Column>
      <Column>
        <CartIcon onClick={() => removeItem(id)}>
          <FaTrashAlt />
        </CartIcon>
      </Column>
      <Column>
        <h3>$ {total}</h3>
      </Column>
    </RowContainer>
  );
}
