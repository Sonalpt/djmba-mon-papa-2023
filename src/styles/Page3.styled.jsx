import styled from "styled-components";

export const StyledPage3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #ffc600;
  color: #072ac8;
  overflow: hidden !important;
  .peanut1 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 1%;
    left: 75%;
    transform: rotate(130deg);
  }
  .peanut2 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 250ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 15%;
    left: 80%;
    transform: rotate(0deg);
  }
  .peanut3 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 500ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 32%;
    left: 76%;
    transform: rotate(340deg);
  }
  .peanut4 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 250ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 35%;
    left: 5%;
    transform: rotate(120deg);
  }
  .peanut5 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 750ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 60%;
    left: 5%;
    transform: rotate(30deg);
  }
  .peanut6 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 250ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 55%;
    left: 78%;
    transform: rotate(90deg);
  }
  .peanut7 {
    animation-name: rotate30deg;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-delay: 500ms;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 70%;
    left: 78%;
    transform: rotate(30deg);
  }
  .bowl {
    margin-top: 50px;
    align-self: center;
    width: 160px;
    height: 160px;
    z-index: 5;
  }
  .peanutBowl1 {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 59.5%;
    left: 30%;
    transform: rotate(120deg);
  }
  .peanutBowl2 {
    z-index: 1;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 59.5%;
    left: 40%;
    transform: rotate(120deg);
  }
  .peanutBowl3 {
    z-index: 1;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 59.5%;
    left: 51%;
    transform: rotate(0deg);
  }
  .peanutBowl4 {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 57%;
    left: 37%;
    transform: rotate(120deg);
  }
  .peanutBowl5 {
    z-index: 1;
    width: 76px;
    height: 76px;
    position: absolute;
    top: 57%;
    left: 46%;
    transform: rotate(0deg);
  }
  p {
    margin-top: 50px;
    font-size: 32px;
    width: 314px;
    margin-left: 20px;
    word-spacing: 5px;
    line-height: 38px;
  }
  .cacahuetePlayer {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: 60px;
    min-height: 100px;
    width: 315px;
    border: 2px solid #072ac8;
    border-radius: 100px;
    img {
      margin-right: 10%;
    }
    span {
      margin-right: 10%;
      font-size: 24px;
    }
  }
  .arrowsDown {
    animation-name: arrowUpDown;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    img {
      width: 67px;
      height: 90px;
    }
  }
`;
