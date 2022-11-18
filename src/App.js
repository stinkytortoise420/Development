import './App.css';
import './Pokemon.js';
import Pokemon from './Pokemon.js';

const tangrowthData = ["Grass", "Impish", "100", "535", "Tangrowth"];
const turtwigData = ["Grass", "Adamant", "68", "318", "Turtwig"];
const meganiumData = ["Grass", "Bold", "82", "525", "Meganium"];
const leafeonData = ["Grass", "Impish", "110", "525", "Leafeon"];

const politoedData = ["Water", "Bold", "75", "500", "Politoed"];
const miloticData = ["Water", "Bold", "60", "540", "Milotic"];
const totodileData = ["Water", "Adamant", "65", "314", "Totodile"];
const vaporeonData = ["Water", "Bold", "65", "525", "Vaporeon"];

const heatmorData = ["Fire", "Impish", "97", "484", "Heatmor"];
const torkoalData = ["Fire", "Impish", "85", "470", "Torkoal"];
const chimcharData = ["Fire", "Adamant", "58", "309", "Chimchar"];
const flareonData = ["Fire", "Adamant", "130", "525", "Flareon"];

function App() {
  return (
    <div className="App">
      <header className="App-header">Create Your Own Team of Pokemon!</header>
      <div className="functions">
        <div className="options">
          <h1>Sort</h1>
          <select>
            <option>None</option>
            <option>Highest Attack</option>
          </select>
        </div>
        <div className="options">
          <h1>Filter</h1>
          <div className="filter-category">
            <p className="filter-text">Type:</p>
            <select>
              <option>None</option>
              <option>Grass</option>
              <option>Water</option>
              <option>Fire</option>
            </select>
          </div>
          <div className="filter-category">
            <p className="filter-text">Nature:</p>
            <select>
              <option>None</option>
              <option>Adamant</option>
              <option>Bold</option>
              <option>Impish</option>
            </select>
          </div>
        </div>
        <div className="options">
          <h1>Party</h1>
          <button>See Party</button>
          <button>Clear Party</button>
        </div>
      </div>
      <div className="pokemon-cards">
        <Pokemon data={tangrowthData}></Pokemon>
        <Pokemon data={turtwigData}></Pokemon>
        <Pokemon data={meganiumData}></Pokemon>
        <Pokemon data={leafeonData}></Pokemon>
        <Pokemon data={politoedData}></Pokemon>
        <Pokemon data={miloticData}></Pokemon>
        <Pokemon data={totodileData}></Pokemon>
        <Pokemon data={vaporeonData}></Pokemon>
        <Pokemon data={heatmorData}></Pokemon>
        <Pokemon data={torkoalData}></Pokemon>
        <Pokemon data={chimcharData}></Pokemon>
        <Pokemon data={flareonData}></Pokemon>
      </div>
    </div>
  );
}

export default App;
