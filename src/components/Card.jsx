import { useEffect, useState } from "react";
import { ShuffleCards } from "./Shuffle";
import { Gameover, Winner } from "./GameOver";

export default function Cards({ cards, setCards }) {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = (card) => {
    if (clicked.includes(card.pokemon)) {
      setBestScore(Math.max(bestscore, score));
      setShow(true);
      setClicked([]);
      setScore(0);
    } else {
      setCards(ShuffleCards(cards));
      setClicked([...clicked, card.pokemon]);
      setScore((score) => score + 1);
      if (clicked.length + 1 === cards.length) {
        setShow(true);
      }
    }
  };

  return (
    <>
      <div className="scoreboard">
        <div className="score-box">
          <div className="label">Score</div>
          <div className="value">{score}</div>
        </div>
        <div className="score-box best">
          <div className="label">Best</div>
          <div className="value">{bestscore}</div>
        </div>
      </div>
 
      <div className="cards-grid">
        {cards && cards.map((card, index) => (
          <div
            key={index}
            className={`card ${show ? "disabled" : ""}`}
            onClick={() => handleClick(card)}
          >
            {card.image && (
              <img src={card.image} alt={card.pokemon} />
            )}
            <p className="pokemon-name">{card.pokemon}</p>
          </div>
        ))}
      </div>
 
      {show && (
        score === 0 ? (
          <Gameover bestscore={bestscore} show={show} setShow={setShow} />
        ) : (
          <Winner score={score} show={show} setShow={setShow} />
        )
      )}
    </>
  );
}
