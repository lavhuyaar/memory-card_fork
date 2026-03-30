export function Gameover({ bestscore, show, setShow }) {
  return (
    <>
      {show && (
        <div className="overlay">
          <div className="modal gameover">
            <span className="emoji">💀</span>
            <h2>Game Over!</h2>
            <p>Best Score</p>
            <div className="final-score">{bestscore}</div>
            <button onClick={() => setShow(false)}>Try Again</button>
          </div>
        </div>
      )}
    </>
  );
}

export function Winner({ score, show, setShow }) {
  return (
    <>
      {show && (
        <div className="overlay">
          <div className="modal winner">
            <span className="emoji">🏆</span>
            <h2>You Won!</h2>
            <p>Perfect Score</p>
            <div className="final-score">{score}</div>
            <button onClick={() => setShow(false)}>Play Again</button>
          </div>
        </div>
      )}
    </>
  );
}
