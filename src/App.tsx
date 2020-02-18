import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import "./App.css";
import AuthenticationProvider from "./components/AuthenticationProvider";
import CustomRouter from "./components/CustomRouter";

const App = () => {
  return (
    <div className="App">
        <AuthenticationProvider>
          <NavBar />
          <CustomRouter />
        </AuthenticationProvider>
    </div>
  );
};

export default App;
