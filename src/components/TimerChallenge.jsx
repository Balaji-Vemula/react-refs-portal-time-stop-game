import React, { useState, useRef } from "react";
import RequestModal from "./RequestModal";

export default function TimerChallenge({ title, targetTime }) {
  // We can use useState for timer but we used useRef because
  // we don't have any requirement to re-evaluate or reload the component whenever timer changes
  // and it doesn't have dependency in UI/JSX code
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // This is to trigger the modal dialog when the timer expires
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  // We changed the setTimeout to setInterval because
  // 1. SetTimeout runs the function only once ofter the timer set 10 milliseconds
  //    (previously it ran only once for targetTime * 1000 for setTimeout and now it will run 
  //    only once after 10 milliseconds )
  // 2. We need to count the time like how much time is passed and how much time is remaining that
  //    is why we used setInterval, setInterval runs every time interval here it will run every 
  //    10 milliseconds that is why we are decrementing the time remaining by 10 milliseconds.
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((preTimeRemaining) => preTimeRemaining - 10);
    }, 10); // runs every 10 milliseconds
  }

  // This is to trigger the modal dialog when the user clicks on stop challenge button
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <RequestModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
