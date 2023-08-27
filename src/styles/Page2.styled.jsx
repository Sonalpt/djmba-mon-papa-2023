import styled from "styled-components";

export const StyledPage2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a2d6f9;
  color: #fff;
  width: 100vw;
  height: 100vh;
  p.title {
    font-size: 36px;
    margin-left: 20px;
    margin-top: 42px;
    letter-spacing: 1.5px;
    line-height: 45px;
    word-spacing: 2px;
    margin-bottom: 30px;
  }
  .cardsRow {
    height: 50vh;
    display: flex;
    z-index: 1;
    overflow-x: scroll;
    .cardContainer {
      margin-left: 20px;
      background-color: #1e96fc;
      min-width: 322px;
      height: 322px;
      border-radius: 3px;
      img {
        width: 180px;
        height: 180px;
        position: relative;
        top: 30%;
        left: 55%;
        border: 3px solid #fcf300;
        border-radius: 3px;
        box-shadow: 3px 3px 4px 0px #fcf300;
        object-fit: cover;
      }
      &_text {
        position: relative;
        top: 20%;
        margin-left: 20px;
        p:nth-child(1) {
          font-size: 40px;
          color: #fffb87;
          margin-bottom: 20px;
        }
        p:nth-child(2) {
          font-size: 48px;
          color: #fcf300;
        }
      }
    }
  }
  .blueline1 {
    background-color: #1e96fc;
    min-width: 100vw;
    min-height: 3px;
    margin-bottom: 5px;
  }
  .yellowline1 {
    background-color: #fcf300;
    min-width: 100vw;
    min-height: 3px;
  }
  .movingTextContainer {
    overflow: hidden; /* Masque le contenu dépassant le conteneur */
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .movingText {
      position: absolute;
      animation: movingText 10s linear infinite;
      margin-top: 10px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
  }

  .arrowsDown {
    animation-name: arrowUpDown;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    img {
      width: 67px;
      height: 90px;
    }
  }
`;
