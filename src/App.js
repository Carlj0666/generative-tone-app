import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

const synth = new Tone.MembraneSynth().toMaster();

function playSynth() {
  synth.triggerAttackRelease("C4","8n");
}

function App() {
  return (
    <div id='wrapper'>
      <button id='button' onClick={playSynth}>Click Me</button>
    </div>
  );
}

export default App;
