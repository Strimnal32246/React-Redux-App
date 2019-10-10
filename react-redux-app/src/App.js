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
      <PokemonList />
    </div>
  );
}

export default App;
