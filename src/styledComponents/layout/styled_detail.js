import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "picture info";
  grid-template-columns: 1fr 2fr;
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 700px) {
    grid-template-areas:
      "picture"
      "info";
  }

  h2 {
    text-transform: capitalize;
  }

  h3 {
    color: #2a2a72;
    font-size: 2.5rem;
  }

  p {
    padding: 0 8%;
    text-align: left;
  }
`;

export const Picture = styled.div`
  grid-area: picture;
  background: #d3d3d3;
  margin: auto;
`;

export const Info = styled.div`
  grid-area: info;
`;

export const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
`;
