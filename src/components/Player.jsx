import { useState, useRef } from "react";

export default function Player() {
  const inputValue = useRef();

  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handlePlayerNameChange(event) {
  //   setSubmitted(false);
  //   setPlayerName(event.target.value);
  // }

  function handleButtonClick() {
    setPlayerName(inputValue.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" 
        ref={inputValue}
        // onChange={handlePlayerNameChange} 
        // value = {playerName}
        />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
