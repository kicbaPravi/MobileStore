import styled from "styled-components";

export const StyledProduct = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #f5f5f5;
  max-width: 300px;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  text-align: center;
  font-family: arial;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
`;
export const StyledPrice = styled.div`
  color: grey;
  font-size: 22px;
`;
export const StyledButton = styled.div`
  border: none;
  outline: 0;
  padding: 10px;
  text-transform: capitalize;
  color: white;
  background: ${prop => (prop.cart ? "#009ffd" : "#2a2a72")};
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;

  font-size: 18px;
  &:hover {
    background: #ffa400;
  }
`;
