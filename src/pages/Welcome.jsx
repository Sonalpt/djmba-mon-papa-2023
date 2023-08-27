import React from "react";
import { useEffect, useState } from "react";
import { StyledAccueil } from "../styles/Accueil.styled";
import { StyledPage1 } from "../styles/Page1.styled";
import { StyledPage2 } from "../styles/Page2.styled";
import { StyledCardDetails } from "../styles/CardDetails.styled";
import { StyledPage3 } from "../styles/Page3.styled";
import { StyledPage4 } from "../styles/Page4.styled";
import { StyledPage5 } from "../styles/Page5.styled";
import congaImg from "../assets/Conga.png";

function Welcome() {
  const themeMusic = new Audio("./src/sounds/Monsters-Inc-theme.mp3");
  themeMusic.preload = "auto";
  const cacahueteMusic = new Audio("./src/sounds/cacahuete.mp4");
  cacahueteMusic.preload = "auto";

  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [isCacahuetePlaying, setIsCacahuetePlaying] = useState(false);
  const cardObjects = [
    {
      name: "Dadaïste",
      text: "Hola mon padre ! Joyeux anniversaire ! Tu sais que ça fait bientôt 25 ans qu'on se connait ? Tu as beau dire que tu ne passais pas tant de temps que ça avec nous quand on était petits parce que tu étais au boulot, mais la majorité des mes passions actuelles découlent de ce qu'on a partagé ensemble depuis ma plus tendre enfance. Je m'en rends compte de plus en plus maintenant. GTA Vice City, l'endroit où j'adore aller pour me donner un petit coup de peps (je l'ai encore recommencé sur téléphone là). Ma passion pour les Need For Speed (On les a vraiment presque tous fait). On a monté des PC ensemble j'étais minuscule, tu voulais me faire un cadeau tu m'achetais un nouveau disque dur pour installer encore plus de jeux (on achetait pas les jeux, on les crackait, ça fait plus de sous pour les disques, pratique). Puis y'a eu l'informatique de manière générale, je trouvais ça hyper intéressant à l'époque l'hardware. Maintenant ils ont un peu tout simplifié mais je garde un bon souvenir des vieux PC à monter avec toi, avec DES CAVALIERS. Puis j'ai grandi. L'échange était moins fréquent car je vivais mon adolescence, mais j'ai alors eu d'autres conversations avec toi. LES FILLES. T'es d'ailleurs tombé plusieurs fois sur des scènes bien sympathiques avec des potes à moi, ça me fume ça par contre, mes potes et moi on avait aucune gène. La vie d'adulte, c'est différent. Je remarque tes influences sur mes goûts par rapport à des plus petits détails. Des artistes que je vais écouter (Bernard Lavilliers on te salut), ma façon de ranger mes visses et mes câbles (là j'ai vraiment une boite de Haribo avec des câbles dedans), mes passions éphémères pour la lecture ou l'écriture, et l'art bien sûr. Alors je te remercie vraiment de ne pas avoir réfléchi avec moi, dans le sens où tu n'anticipais pas ou te posais pas les questions du genre « est-ce que je peux partager ça avec mon fils ? ». Nan, toi, tu as naturellement partager tes passions avec moi et toujours répondu à mes questions, et ça, je pense que c'est un vrai + dans ma vie actuelle, alors, UN GRAND MERCI. A cet instant, je ne sais trop quoi te souhaiter. On ne sait comment réfléchir, on ne sait plus de quoi on a envie. On se perd. Mais on est quand même accompagnés, d'une manière ou d'une autre. Toi, c'est par la musique. Tu t'identifie aussi bien au chant qu'à l'instrumentale, c'est vraiment ça qui te fait vibrer, et c'est ce que j'ai ressenti dans les dernières vidéos de concert que tu m'a envoyé. Maintenant, si je ne pouvais te suggérer qu'une seule idée, ce serait de voyager. Peu importe où. Mais tu en as besoin, c'est la dernière corde qui manque à la guitare avec laquelle tu vas t'éclater demain. Je sais que ni toi ni moi aimons particulièrement les anniversaires mais, tu sais quoi ? C'est juste une autre occasion de jouer et de partager une nouvelle mélodie avec ceux qui t'entourent, alors pourquoi des priver ? Alors, encore une fois, joyeux anniversaire ! N'oublie pas, tu n'as que 40 ans !",
      photo: "remy.png",
    },
    {
      name: "Poupette",
      text: "A mon poupou d'amour, mon musicien préféré ... Je t'offre ce carnet pour que tu puisses y noter 1000 et 1 chansons !! Merci à toi de toujours nous partager ta joie de vivre même pendant des moments difficiles, d'être si courageux et si fort ! Je t'aime fort fort fort ! J'ai hâte de técouter sur d'autres vidéos pendant tes concerts ! Encore bon anniversaire mon poupou d'amour et n'oublie pas, tu n'as que 40 ans !!! Gros bisous de nous ! Ta poupette d'amour !",
      photo: "oceane.jpeg",
    },
    {
      name: "Kiki",
      text: "Coucou papa, bon anniversaire, déjà 60 balais de collection dit donc, tu deviens un fossile, rien ne va plus mais toujours aussi bon chanteur ! Je t'aime énormément, je te remercie de nous avoir tant fait rire au cours de notre vie, d'avoir été une source d'inspiration pour nous ainsi que de nous avoir inculqué tes valeurs ! Encore bon anniversaire, je t'aime plus que tout, tu es le meilleur papa du monde. Ton kiki de Paris !",
      photo: "kiki.png",
    },
    {
      name: "Edelweiss",
      text: "Mon très cher tonton, tu savais que depuis nos discussions, j'ai pas arrêté d'utiliser le mot chafouin. Et comme à tes côtés, j'ai appris à m'intéresser au sens des mots, je me suis renseignée. Bah figure-toi qu'on se fourvoie depuis le début ! Chafouin signifie être mesquin/sournois ... Je me suis sentie conne (et non pas con, l'avantage de pouvoir le mettre au féminin eheh). Mais j'aime pas du tout cette définition, je préfère celle qu'on a établit ensemble et j'ai décidé de la répendre autour de moi avec la mauvaise définition pour que tout le monde puisse l'utiliser à notre manière, MOUHAHAHAHAHA ! Je t'embrasse fort, je t'aime ! Ta nièce à la recherche d'un dialecte plus fourni !",
      photo: "edelweiss.jpeg",
    },
  ];

  return (
    <>
      {/* la page d'accueil */}
      <StyledAccueil>
        <img className="confetti1" src="../src/assets/Confetti.png" alt="" />
        <img className="confetti2" src="../src/assets/Confetti.png" alt="" />
        <img className="partyEmoji" src="/src/assets/Party.png" alt="" />
        <img className="conga" src={congaImg} alt="" />
        <img className="laughingEmoji" src="src/assets/laughing.png" alt="" />
        <img className="saxophone" src="/saxophone.png" alt="" />
        <img className="likeEmoji" src="src/assets/like.png" alt="" />
        <img className="happyEmoji" src="src/assets/happy.png" alt="" />
        <img className="coolEmoji" src="src/assets/cool.png" alt="" />
        <img className="harmonica" src="src/assets/harmonica.png" alt="" />
        <img className="maracas" src="src/assets/maracas.png" alt="" />
        <img className="guitar" src="src/assets/electricguitar.png" alt="" />
        <p>Voici ta carte d’anniversaire ! Tu veux activer la musique ?</p>
        <div className="buttonsRow">
          <button
            onClick={() => {
              themeMusic.play(),
                window.scrollTo({
                  top: window.scrollY + window.innerHeight,
                  behavior: "smooth",
                });
            }}
          >
            Oui
          </button>
          <button
            onClick={() => {
              themeMusic.pause(),
                window.scrollTo({
                  top: window.scrollY + window.innerHeight,
                  behavior: "smooth",
                });
            }}
          >
            Non
          </button>
        </div>
      </StyledAccueil>

      {/* la page 1 */}

      <StyledPage1>
        <p>
          Je crois que certains autochtones t’ont laissé quelques mots pour
          l’occasion. <br /> Tu veux y jeter un oeil ?
        </p>
        <img src="src/assets/minion1.webp" alt="" />
        <div className="arrowsDown">
          <img src="src/assets/Arrowdownblue.svg" alt="" />
          <img src="src/assets/Arrowdownblue.svg" alt="" />
          <img src="src/assets/Arrowdownblue.svg" alt="" />
        </div>
      </StyledPage1>

      {/* la page 2 */}

      <StyledPage2>
        <p className="title">
          Hésite pas à <br /> défiler sur le côté !
        </p>
        <div className="cardsRow">
          {cardObjects.map((cardObject, index) => {
            return (
              <div
                className="cardContainer"
                onClick={() => {
                  setIsCardOpened(true), setCardIndex(index);
                }}
              >
                <div className="cardContainer_text">
                  <p>Un mot de...</p>
                  <p>{cardObject.name}</p>
                </div>
                <img src={"src/assets/" + cardObject.photo} alt="" />
              </div>
            );
          })}
        </div>
        <div className="blueline1"></div>
        <div className="yellowline1"></div>
        <div className="movingTextContainer">
          <p className="movingText">
            Joyeux anniversaire de la part de babinouchecouche !
          </p>
        </div>
        <div className="blueline1"></div>
        <div className="yellowline1"></div>

        <div className="arrowsDown">
          <img src="src/assets/Arrowdownwhite.svg" alt="" />
          <img src="src/assets/Arrowdownwhite.svg" alt="" />
          <img src="src/assets/Arrowdownwhite.svg" alt="" />
        </div>
      </StyledPage2>

      {isCardOpened ? (
        <StyledCardDetails>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setIsCardOpened(false);
            }}
          >
            <g clipPath="url(#clip0_53_62)">
              <path
                d="M74.9384 -3.06523e-05L0 13.2136L13.2137 88.152L88.152 74.9383L74.9384 -3.06523e-05Z"
                fill="#1E96FC"
              />
              <path
                d="M74.8755 18.0924L18.0924 13.1245L13.1245 69.9076L69.9076 74.8755L74.8755 18.0924Z"
                fill="#FCF300"
                stroke="#1E96FC"
                strokeWidth="3"
              />
              <path
                d="M32.0607 29.9392L57.0607 54.9392"
                stroke="#1E96FC"
                strokeWidth="3"
              />
              <path
                d="M29.9393 54.9392L54.9393 29.9392"
                stroke="#1E96FC"
                strokeWidth="3"
              />
            </g>
            <defs>
              <clipPath id="clip0_53_62">
                <rect width="89" height="89" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="mainContent">
            <img src="src/assets/minion2.webp" alt="" />
            <p>{cardObjects[cardIndex].text}</p>
            <img
              className="photo"
              src={"src/assets/" + cardObjects[cardIndex].photo}
              alt=""
            />
          </div>
        </StyledCardDetails>
      ) : null}

      {/* page 3 ou page cacahuete */}

      <StyledPage3>
        <p>
          On enchaine fort avec l’histoire de la cacahuète ! Tu sais ce que
          c’est qu’une cacahuète ? C’est une caca... C’est une catastrophe.
        </p>
        <img className="peanut1" src="src/assets/peanut.png" alt="" />
        <img className="peanut2" src="src/assets/peanut.png" alt="" />
        <img className="peanut3" src="src/assets/peanut.png" alt="" />
        <img className="peanut4" src="src/assets/peanut.png" alt="" />
        <div className="cacahuetePlayer">
          {isCacahuetePlaying ? (
            <img
              onClick={() => {
                setIsCacahuetePlaying(false), cacahueteMusic.pause();
              }}
              src="src/assets/pauseButton.svg"
              alt=""
            />
          ) : (
            <img
              onClick={() => {
                setIsCacahuetePlaying(true), cacahueteMusic.play();
              }}
              src="src/assets/playButton.png"
              alt=""
            />
          )}

          <span>La cacahuète</span>
        </div>
        <img className="peanut5" src="src/assets/peanut.png" alt="" />
        <img className="peanut6" src="src/assets/peanut.png" alt="" />
        <img className="peanut7" src="src/assets/peanut.png" alt="" />
        <img className="bowl" src="src/assets/SaladBowl.png" alt="" />
        <img className="peanutBowl1" src="src/assets/peanut.png" alt="" />
        <img className="peanutBowl2" src="src/assets/peanut.png" alt="" />
        <img className="peanutBowl3" src="src/assets/peanut.png" alt="" />
        <img className="peanutBowl4" src="src/assets/peanut.png" alt="" />
        <img className="peanutBowl5" src="src/assets/peanut.png" alt="" />

        <div className="arrowsDown">
          <img src="src/assets/Arrowdownblue.svg" alt="" />
          <img src="src/assets/Arrowdownblue.svg" alt="" />
          <img src="src/assets/Arrowdownblue.svg" alt="" />
        </div>
      </StyledPage3>

      {/* la page 4 ou page des liens */}

      <StyledPage4>
        <p>
          Et voici quelques surprises <br /> en plus
        </p>
        <img className="gift1" src="src/assets/Gift.png" alt="" />
        <img className="gift2" src="src/assets/Gift.png" alt="" />
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1OGzOeew7sgTiEOHafhuZIwa9q7VkB7-R/view?usp=sharing"
        >
          <span>SURPRISE N°1</span>
          <img src="src/assets/Arrowright.png" alt="" />
        </a>
        <a
          target="_blank"
          href="https://photos.google.com/share/AF1QipOzjTjBMf2EUGYVPVvzkfaUXfZfBB-MvoKU_DMWuOVK19M-CSWw1HoXRT2-KKg9Xw?key=ZWhWMG1nbXIwZnlUR3dFdXpNTGE3TTAyNXBydGtR"
        >
          <span>SURPRISE N°2</span>
          <img src="src/assets/Arrowright.png" alt="" />
        </a>
        <img src="src/assets/minion4.webp" alt="" />
        <div className="arrowsDown">
          <img src="src/assets/Arrowdownyellow.svg" alt="" />
          <img src="src/assets/Arrowdownyellow.svg" alt="" />
          <img src="src/assets/Arrowdownyellow.svg" alt="" />
        </div>
      </StyledPage4>

      {/* la page finale */}

      <StyledPage5>
        <p>En te souhaitant encore une fois, un joyeux anniversaire !</p>
        <img src="src/assets/minion6.webp" alt="" />
        <div className="partyContainer">
          <img className="party1" src="src/assets/Party.png" alt="" />
          <img className="party2" src="src/assets/Party.png" alt="" />
          <img className="party3" src="src/assets/Party.png" alt="" />
        </div>
        <p>
          C’est que 40 ans, t’as toujours d’aussi bonnes dents, et toujours
          autant de talent !
        </p>
        <img src="src/assets/minion5.webp" alt="" />
      </StyledPage5>
    </>
  );
}

export default Welcome;
