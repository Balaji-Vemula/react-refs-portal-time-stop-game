import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handlePlayerNameChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleButtonClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName:'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handlePlayerNameChange} />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
