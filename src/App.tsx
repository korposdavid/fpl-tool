import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import PlayerListContainer from "./components/PlayerListContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./components/AuthenticationProvider"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticationProvider>
          <NavBar />
          <PlayerListContainer />
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
