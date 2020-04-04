import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  min-height: 100px;
  background: #009ffd;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 70rem;
  margin: auto;
  display: grid;
  grid-template-areas: "logo title title cart";
  align-items: center;

  @media (max-width: 700px) {
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  margin: auto;
`;

export const Products = styled.div`
  grid-area: title;
  grid-column: 2 / span 2;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 2.5rem;
    color: #232528;
  }
`;

export const Cart = styled.div`
  grid-area: cart;
  text-align: center;

  a {
    vertical-align: middle;
    display: inline-block;
    text-decoration: none;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 10px;
  background: #009ffd;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background: white;
    color: #2a2a72;
  }

  span {
    padding-left: 13px;
  }
`;
