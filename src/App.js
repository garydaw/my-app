import './App.css';
import { useEffect } from 'react';
import  Player from './Components/Player.js';
import { useState } from 'react';

//const myPlayerId = '832233694';

export default function App() {

  const url = 'https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/';
  const [playerUnits,setPlayerUnits] = useState([]);

  let getPlayerInfo = async () => {
    try {
        const data = await (await fetch(url + document.getElementById("playerId").value+'/')).json()
        setPlayerUnits(data.units)
    } catch (err) {
        console.log(err.message)
    }
}

  return (
    <div className="App">
      <input type="text" id="playerId"></input>
      <button onClick={getPlayerInfo}>Search</button>
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {playerUnits.map((unit, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{unit.data.base_id}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}