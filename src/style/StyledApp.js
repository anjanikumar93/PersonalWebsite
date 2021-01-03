import styled from "styled-components";
import MainImage from "../image/bridge2.jpg";

export const StyledApp = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${MainImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;
  }
`;
