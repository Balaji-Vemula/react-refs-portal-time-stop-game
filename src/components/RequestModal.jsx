import { forwardRef, useImperativeHandle, useRef} from "react";

const RequestModal = forwardRef(function RequestModal({ result, targetTime }, ref) {
  const dialog = useRef();


  // To detach the show model function from TimerChallenge.jsx, we used useImperativeHandle
  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default RequestModal;
