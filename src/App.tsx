import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import PlayerListContainer from "./components/PlayerListContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <PlayerListContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
