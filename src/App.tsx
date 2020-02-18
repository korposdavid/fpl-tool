import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import "./App.css";
import AuthenticationProvider from "./components/AuthenticationProvider";
import { CookiesProvider } from "react-cookie";
import CustomRouter from "./components/CustomRouter";

const App = () => {
  return (
    <div className="App">
      <CookiesProvider>
        <AuthenticationProvider>
          <NavBar />
          <CustomRouter />
        </AuthenticationProvider>
      </CookiesProvider>
    </div>
  );
};

export default App;
