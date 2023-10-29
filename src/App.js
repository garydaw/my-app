import './App.css';
import  Player from './Components/Player.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const myPlayerId = '832233694';

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
    <div className="container">
      <h1>SWGOH Player Utils</h1>
      <div className="input-group mb-3">
          <span className="input-group-text">Player ID</span>
          <input type="text"  
            className="form-control"
            placeholder="Player ID"
            aria-label="Player ID"
            aria-describedby="Player ID"
            id="playerId"
            value={myPlayerId}></input>
        
        <button className="form-control btn btn-primary" onClick={getPlayerInfo}>Search</button>
      </div>
      <div className="row">
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
      </div>
    </div>
  );
}