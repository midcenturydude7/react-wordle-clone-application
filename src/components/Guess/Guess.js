import React from "react";

function Guess({ handleGuess, guess, setGuess }) {
  return (
    <div>
      <form onSubmit={handleGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default Guess;
