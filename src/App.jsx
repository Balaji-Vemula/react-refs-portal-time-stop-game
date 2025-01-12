import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={15} />
        <TimerChallenge title="Not easy" targetTime={10} />
        <TimerChallenge title="Getting tough" targetTime={5} />
        <TimerChallenge title="Pros Only" targetTime={1} />
      </div>
    </>
  );
}

export default App;
