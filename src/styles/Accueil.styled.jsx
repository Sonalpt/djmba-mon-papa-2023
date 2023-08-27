import styled from "styled-components";

export const StyledAccueil = styled.div`
  /* animation-name: cardAppearance;
  animation-duration: 750ms;
  animation-fill-mode: none; */
  position: relative;
  transform-origin: center;
  top: 0%;
  width: 100vw;
  height: 100vh;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  background-color: #072ac8;
  color: #ffc600;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
  }
  .confetti1 {
    opacity: 0;
    transform-origin: top left;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 0.5%;
    left: 1%;
  }
  .confetti2 {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 93%;
    left: 83%;
    transform: rotate(180deg);
  }
  .partyEmoji {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      infiniteLoop 1000ms linear infinite;

    top: 15%;
    left: 10.5%;
  }
  .conga {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 8%;
    left: 38%;
  }
  .saxophone {
    opacity: 0;
    transform-origin: bottom;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 17%;
    left: 70%;
  }
  .laughingEmoji {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      infiniteLoop 1000ms linear infinite;

    top: 6%;
    left: 85%;
  }
  .likeEmoji {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      infiniteLoop 1000ms linear infinite;

    top: 52.5%;
    left: 7%;
  }
  .harmonica {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 55.5%;
    left: 75%;
  }
  .happyEmoji {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      infiniteLoop 1000ms linear infinite;

    top: 70.5%;
    left: 17.5%;
  }
  .maracas {
    opacity: 0;
    transform-origin: bottom left;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotate30deg 1000ms linear infinite;

    top: 65.5%;
    left: 57.5%;
  }
  .coolEmoji {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      infiniteLoop 1000ms linear infinite;

    top: 80.5%;
    left: 70.5%;
  }
  .guitar {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards,
      rotateMinus30deg 1000ms linear infinite;

    top: 85%;
    left: 15%;
  }
  p {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards;
    position: relative;
    bottom: 12.5%;
    font-size: 30px;
    width: 255px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 1.5px;
    margin-bottom: 30px;
  }
  .buttonsRow {
    opacity: 0;
    animation: cardElementAppearance1 450ms 755ms linear 1 forwards;
    display: flex;
    justify-content: space-around;
    width: 230px;
    position: relative;
    bottom: 12.5%;
    button {
      background-color: #ffc600;
      color: #072ac8;
      font-size: 24px;
      border: none;
      border-radius: 3px;
      width: 40%;
    }
  }
`;
