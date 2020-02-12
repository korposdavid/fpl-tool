import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar"
import PlayerListContainer from "./components/PlayerListContainer";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <PlayerListContainer/>
    </div>
  );
};

export default App;
