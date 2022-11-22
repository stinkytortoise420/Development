import './App.css';
import './Pokemon.js';
import Pokemon from './Pokemon.js';
import { useState } from "react";

const pokemonData = [
  {type: "Grass", nature: "Impish", attack: 100, total: 535, pName: "Tangrowth"},
  {type: "Grass", nature: "Adamant", attack: 68, total: 318, pName: "Turtwig"},
  {type: "Grass", nature: "Bold", attack: 82, total: 525, pName: "Meganium"},
  {type: "Grass", nature: "Impish", attack: 110, total: 525, pName: "Leafeon"},
  {type: "Water", nature: "Bold", attack: 75, total: 500, pName: "Politoed"},
  {type: "Water", nature: "Bold", attack: 60, total: 540, pName: "Milotic"},
  {type: "Water", nature: "Adamant", attack: 65, total: 314, pName: "Totodile"},
  {type: "Water", nature: "Bold", attack: 65, total: 525, pName: "Vaporeon"},
  {type: "Fire", nature: "Impish", attack: 97, total: 484, pName: "Heatmor"},
  {type: "Fire", nature: "Impish", attack: 85, total: 470, pName: "Torkoal"},
  {type: "Fire", nature: "Adamant", attack: 58, total: 309, pName: "Chimchar"},
  {type: "Fire", nature: "Adamant", attack: 130, total: 525, pName: "Flareon"}
]

function App() {

  const [teamList, setTeamList] = useState([]);
  const [totalPower, setTotalPower] = useState(0);
  const [type, setType] = useState("None");
  const [nature, setNature] = useState("None");
  const [sortCat, setSortCat] = useState("None");
  const filteredData = updateFilteredData();

  function addToTeam(pName, statTotal) {
    if (!teamList.includes(pName)) {
      const tempTeamList = teamList;
      tempTeamList.push(pName);
      setTeamList(tempTeamList);
      setTotalPower(totalPower + statTotal);
    }
  }

  function removeFromTeam(pName, statTotal) {
    if (teamList.includes(pName)) {
      const tempTeamList = [];
      for (let i = 0; i < teamList.length; i++) {
        if (teamList[i] !== pName) {
          tempTeamList.push(teamList[i]);
        }
      }
      setTeamList(tempTeamList);
      setTotalPower(totalPower - statTotal);
    }
  }

  function clearParty() {
    setTeamList([]);
    setTotalPower(0);
  }

  function updateFilteredData() {
    const tempPokemonList = [];
    console.log(type);
    for (let i = 0; i < pokemonData.length; i++) {
      const currentData = pokemonData[i];
      if (currentData.nature === nature || nature === "None") {
        if (currentData.type === type || type === "None") {
          tempPokemonList.push(pokemonData[i]);
        }
      }
    }
    if (parseInt(sortCat)) {
      tempPokemonList.sort( compareAttack );
    }
    return tempPokemonList;
  }

  function changeFilterType() {
    const selectType = document.getElementById("type");
    setType(selectType.value);
    console.log(type);
  }

  function changeFilterNature() {
    const selectNature = document.getElementById("nature");
    setNature(selectNature.value);
    console.log(nature);
  }

  function changeSortCategory() {
    const selectSortCat = document.getElementById("sort");
    setSortCat(selectSortCat.value);
  }

  function compareAttack(a, b) {
    if (a.attack < b.attack) {
      return 1;
    } else if (a.attack > b.attack) {
      return -1;
    }
    return 0;
  }

  return (
    <div className="App">
      <header className="App-header">Create Your Own Team of Pokemon!</header>
      <div className="functions">
        <div className="options">
          <h1>Sort</h1>
          <select id="sort" onChange={ () => {
            changeSortCategory();
          }}>
            <option value="0">None</option>
            <option value="1">Highest Attack</option>
          </select>
        </div>
        <div className="options">
          <h1>Filter</h1>
          <div className="filter-category">
            <p className="filter-text">Type:</p>
            <select id="type" onChange={ () => {
              changeFilterType();
            }}>
              <option value="None">None</option>
              <option value="Grass">Grass</option>
              <option value="Water">Water</option>
              <option value="Fire">Fire</option>
            </select>
          </div>
          <div className="filter-category">
            <p className="filter-text">Nature:</p>
            <select id="nature" onChange={ () => {
              changeFilterNature();
            }}>
              <option value="None">None</option>
              <option value="Adamant">Adamant</option>
              <option value="Bold">Bold</option>
              <option value="Impish">Impish</option>
            </select>
          </div>
        </div>
        <div className="options">
          <h1>Party</h1>
          <button onClick={() => {
            clearParty();
          }}>Clear Party</button>
        </div>
      </div>
      <div className="team-wrapper">
        <div className="team">
            <h1>Your Team</h1>
            <h3>Total Power: {totalPower}</h3>
            <div className="pList">
            {teamList.map((pokemon) => {
                return <div className="filter-text">{pokemon},&nbsp;</div>
              })}
            </div>
        </div>
      </div>
      <div className="pokemon-cards">
        {filteredData.map((pokemon) => {
          return <Pokemon data={pokemon} addToTeam={addToTeam} removeFromTeam={removeFromTeam}></Pokemon>
        })}
      </div>
    </div>
  );
}

export default App;
