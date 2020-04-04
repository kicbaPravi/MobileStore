import React from "react";
import { TitleContainer } from "../styledComponents/layout/title";

export default function Title({ name, title }) {
  return (
    <TitleContainer>
      {name}
      <br />
      {title}
    </TitleContainer>
  );
}
