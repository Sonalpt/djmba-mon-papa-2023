import styled from "styled-components";

export const StyledPage5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1e96fc;
  color: white;
  text-align: center;
  p {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 40px;
    width: 350px;
  }
  p:nth-child(1) {
    margin-top: 45px;
  }
  img:nth-child(2) {
    width: 333px;
    height: 168px;
    margin-bottom: 10px;
  }
  .partyContainer {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 85vw;
    display: flex;
    justify-content: space-evenly;
    img {
      animation-name: rotate30deg;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      width: 35px;
      height: 35px;
    }
  }
  img:nth-child(5) {
    width: 333px;
    height: 168px;
  }
`;
