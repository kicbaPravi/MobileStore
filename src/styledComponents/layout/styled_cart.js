import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const RowContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
`;

export const Column = styled.div`
  text-align: center;
  text-transform: capitalize;

  img {
    width: 9rem;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.div`
  background: transparent;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 8px;
  color: #232528;
  border: 0.1rem solid #232528;
  cursor: pointer;

  &:hover {
    background: #2a2a72;
    color: #f3f3f3;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    margin: 3px 0;
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
  color: #ffa400;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.3);
  }
`;

export const CtContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5%;
  margin-top: 30px;
  text-align: right;

  h2,
  h1 {
    color: black;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const ClearButton = styled.div`
  background: red;
  padding: 15px 52px;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;
