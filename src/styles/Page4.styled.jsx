import styled from "styled-components";

export const StyledPage4 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #072ac8;
  color: #ffc600;
  align-items: center;
  p {
    margin-top: 40px;
    font-size: 32px;
    text-align: center;
    line-height: 40px;
    width: 315px;
    margin-bottom: 50px;
  }
  .gift1 {
    position: absolute;
    top: 8%;
    left: 7%;
    width: 100px;
    height: 100px;
  }
  .gift2 {
    position: absolute;
    top: 8%;
    left: 68%;
    width: 100px;
    height: 100px;
    transform: rotate(60deg);
  }
  a {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    color: #fcf300;
    font-size: 24px;
    img {
      animation-name: arrowLeftRight;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
    }
  }
  a:nth-child(5) {
    margin-bottom: 70px;
  }
  img:nth-child(6) {
    width: 260px;
    height: 260px;
    margin-bottom: 30px;
  }
  .arrowsDown {
    animation-name: arrowUpDown;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    width: 90vw;
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    img {
      width: 67px;
      height: 90px;
    }
  }
`;
