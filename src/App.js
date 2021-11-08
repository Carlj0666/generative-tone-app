import './App.css';
import * as Tone from 'tone';

const memSynth = new Tone.MembraneSynth().toDestination();
const now = Tone.now()
// setInterval(() => console.log(Tone.now()), 100);

const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.FMSynth().toDestination();

const loopA = new Tone.Loop(time => {
  synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);

function playSynth() {

  document.querySelector('button')?.addEventListener('click', async () => {
    await Tone.start()
    console.log('audio is ready')
  })
  memSynth.triggerAttackRelease("C2","9n");
  // memSynth.triggerAttackRelease("C4","9t");
  // memSynth.triggerAttackRelease("C6","9n");


}

function App() {

  return (
    <div id='wrapper'>
      <button id='button' onClick={playSynth}>MembraneS</button>
    </div>
  );
}

export default App;
