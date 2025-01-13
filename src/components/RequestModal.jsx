import { forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

const RequestModal = forwardRef(function RequestModal({ targetTime, remainingTime, onReset }, ref) {

  const dialog = useRef();


  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime /1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);


  // To detach the show model function from TimerChallenge.jsx, we used useImperativeHandle
  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      {/* Removed onSubmit to reset because 
          1. the time is resetting and displaying for a millisecond on screen 
          2. when user clicks on escape button to dismiss the dialog modal the onSubmit to reset
            won't be triggered
          That is why we added onClose to reset to dialog tag and it helps in resetting when 
          escape button is clicked and won't display the resetted value in UI*/}
      <form action="dialog"> 
        <button>Close</button>
      </form>
    </dialog>, 
    document.getElementById('modal')
  );
});

export default RequestModal;
