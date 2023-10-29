import { useEffect } from 'react';

const myPlayerId = '832233694';
let playerData;

export default function Player() {
   
      useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/'+myPlayerId+'/')
           .then((response) => response.json())
           .then((data) => {
              playerData = data;
              return showUnits();
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    
   
     
  }

  function showUnits(){
    if(playerData)
      return playerData.units.map((unit) => {
        return "<div>" + unit.data.baseID + "</div>"
      });
    else
      return "";
  }