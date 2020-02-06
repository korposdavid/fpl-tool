import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FPL Tools</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
