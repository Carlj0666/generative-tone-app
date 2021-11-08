import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

const memSynth = new Tone.MembraneSynth().toMaster();
const now = Tone.now()

function playSynth() {
  memSynth.triggerAttackRelease("C2","9n", now);
  memSynth.triggerAttackRelease("C4","9n", now + 0.5);
  memSynth.triggerAttackRelease("C6","9n", now + 1);
}

function App() {
  return (
    <div id='wrapper'>
      <button id='button' onClick={playSynth}>Click Me</button>
    </div>
  );
}

export default App;
