import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/home.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
      </header>

      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
}

export default App;
