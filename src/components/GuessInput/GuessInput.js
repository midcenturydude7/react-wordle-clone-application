import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // guess.length === 5
    //   ? console.log({ guess })
    //   : console.log("Guess must be 5 characters long");

    console.log({ guess });

    setGuess("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
