import styled from "styled-components";

export const StyledPage1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffc600;
  color: #072ac8;
  width: 100vw;
  height: 100vh;

  p {
    font-size: 36px;
    width: 314px;
    margin-left: 20px;
    margin-top: 50px;
    letter-spacing: 1.5px;
    line-height: 45px;
    word-spacing: 5px;
    margin-bottom: 30px;
  }
  img {
    width: 90%;
    height: 186px;
    align-self: center;
    margin-bottom: 90px;
  }
  .arrowsDown {
    animation-name: arrowUpDown;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    display: flex;
    justify-content: space-around;
    img {
      width: 67px;
      height: 90px;
    }
  }
`;
