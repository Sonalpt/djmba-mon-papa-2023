import styled from "styled-components";

export const StyledCardDetails = styled.div`
  animation-name: cardAppearance;
  animation-duration: 750ms;
  animation-fill-mode: none;
  position: fixed;
  transform-origin: center;
  top: 0%;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  background-color: #fcf300;
  color: #1e96fc;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #fcf300;
    border: 2px solid #1e96fc;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1e96fc;
    border-radius: 10px;
  }
  svg {
    animation-name: cardElementAppearance1;
    animation-duration: 450ms;
    animation-fill-mode: forwards;
    animation-delay: 755ms;
    opacity: 0;
    position: relative;
    top: 1.5%;
    left: 75%;
  }
  .mainContent {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    img:nth-child(1) {
      animation-name: cardElementAppearance1;
      animation-duration: 450ms;
      animation-fill-mode: forwards;
      animation-delay: 755ms;
      opacity: 0;
      width: 270px;
      height: 120px;
    }
    p {
      animation-name: cardElementAppearance1;
      animation-duration: 450ms;
      animation-fill-mode: forwards;
      animation-delay: 755ms;
      opacity: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 25px;
      width: 315px;
      max-height: 400px;
      overflow-y: scroll;
      font-size: 20px;
    }
    img:nth-child(3) {
      animation-name: cardElementAppearance1;
      animation-duration: 450ms;
      animation-fill-mode: forwards;
      animation-delay: 755ms;
      opacity: 0;
      width: 138px;
      height: 138px;
      object-fit: cover;
      position: relative;
      top: 5%;
      left: 60%;
    }
  }
`;
