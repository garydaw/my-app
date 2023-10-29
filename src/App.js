import './App.css';
import { useEffect } from 'react';
import  Player from './Components/Player.js';
import { useState } from 'react';

const myPlayerId = '832233694';

export default function App() {

  const url = 'https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/';
  const [playerUnits,setPlayerUnits] = useState([]);

  const fetchInfo = () => {
    return fetch(url + myPlayerId+'/')
      .then((response) => response.json())
      .then((data) => setPlayerUnits(data.units))
  }


  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div className="App">
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