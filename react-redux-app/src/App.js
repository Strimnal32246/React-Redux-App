import axios from "axios";

import React from "react";
import "./App.css";

import PokemonList from "./components/PokeList.js";

function App() {
  axios.get("").then(res => {
    console.log(res);
  });

  return (
    
    <div className="App">
    <h1>Pokemon</h1>
      <PokemonList />
    </div>
  );
}

export default App;
