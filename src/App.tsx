import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import PlayerListContainer from "./components/PlayerListContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./components/AuthenticationProvider";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CookiesProvider>
          <AuthenticationProvider>
            <NavBar />
            <PlayerListContainer />
          </AuthenticationProvider>
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
