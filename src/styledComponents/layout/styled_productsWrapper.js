import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1.7rem;
  justify-items: center;
  min-height: 100px;
  cursor: pointer;

  img {
    width: 170px;
  }
`;
