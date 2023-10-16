import './App.css';
import  Player from './Components/Player';
import { useState } from 'react';

const apiUrl = 'https://swgoh.gg/api/';
const myPlayerId = '832233694';

function App() {

  const [playerId, setPlayerId] = useState(myPlayerId);

  function playerSearchHandler() {
    
    setPlayerId(document.getElementById('playerId').value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galaxy of Heros Helpers!</h1>
        <div>
          <input type="text" id="playerId"/>
          <button className="buttonType" onClick={playerSearchHandler}>I'm a button</button>
        </div>
        <Player playerId={playerId} changePlayerId={value => setPlayerId(value)} rootAPI={apiUrl}/>
      </header>
    </div>
  );
}

export default App;
