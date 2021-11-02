
import './App.css';

import JaCitam from './ucim';
import Maybe from './maybe';
import TrecaSreca from './trecaSreca';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        
      <h1>ja citam</h1>
      <JaCitam></JaCitam>
      
      <h1> {Math.random()}</h1>
      <Maybe></Maybe>
      <button>Dugmic</button>
      <TrecaSreca tekst="da li je ovo">ali zar ovdje nesto nece biti</TrecaSreca>
      </header>
    </div>
  );
}

export default App;
