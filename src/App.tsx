import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar"
import StarterTeamContainer from "./components/StarterTeamContainer";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <StarterTeamContainer/>
    </div>
  );
};

export default App;
