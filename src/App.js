import './App.css';
import  UnitOverview from './Components/UnitOverview.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const myPlayerId = '832233694';

export default function App() {

  const url = 'https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/';
  const [playerUnits,setPlayerUnits] = useState([]);
  const [allUnits,setAllPlayerUnits] = useState([]);
  const [combatType,setCombatType] = useState("units");
  const [className, setClass] = useState("btn-group mb-3 d-none");


  let getPlayerInfo = async () => {
    try {
        //get data
        const data = await (await fetch(url + document.getElementById("playerId").value+'/')).json()

        document.getElementById("unitsRadio").checked = true;
        setClass("btn-group mb-3");

        showUnits("units", data.units.sort((a, b) => (a.data.power < b.data.power) ? 1 : -1), true);

    } catch (err) {
        console.log(err.message)
    }
  }
 

  function showUnits(newCombatType, data, set){

    setCombatType(newCombatType);
    if(set){
      setAllPlayerUnits(data);
    }
    if(newCombatType === "units" ){
      setPlayerUnits(data.filter(checkUnits));
    } else {
      setPlayerUnits(data.filter(checkShips));
    }
    
    function checkUnits(unit) {
      return  unit.data.combat_type === 1;
    }

    function checkShips(unit) {
      return  unit.data.combat_type === 2;
    }

  }

  let checkCombatType = async () => {
    if(document.getElementById("unitsRadio").checked && combatType !== "units"){
      showUnits("units", allUnits, false);
    } else if (document.getElementById("shipsRadio").checked && combatType !== "ships"){
      showUnits("ships", allUnits, false);
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
            value={myPlayerId}
            ></input>
        
        <button className="form-control btn btn-primary" onClick={getPlayerInfo}>Search</button>
      </div>
      
      
      <div className={className} role="group" aria-label="Combat Selection">
        <input type="radio" className="btn-check" name="combatType" id="unitsRadio" autoComplete="off" onClick={checkCombatType}></input>
        <label className="btn btn-outline-primary" htmlFor="unitsRadio">Units</label>

        <input type="radio" className="btn-check" name="combatType" id="shipsRadio" autoComplete="off" onClick={checkCombatType}></input>
        <label className="btn btn-outline-primary" htmlFor="shipsRadio">Ships</label>
      </div>
      

      <div className="row row-cols-3">
        {playerUnits.map((unit, index) => {
          return (
              <UnitOverview unit={unit.data} key={unit.data.base_id}></UnitOverview>
          );
        })}
      </div>
    </div>
  );
}