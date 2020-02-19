import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useAuthentication } from "../components/AuthenticationProvider";

const NavBar = () => {
  const { user, login, logout } = useAuthentication();

  const nonAuthContent = (
    <Fragment>
      <Button
        onClick={() => login()}
        variant="outline-primary"
        style={{ marginLeft: "2rem" }}
      >
        Login
      </Button>
    </Fragment>
  );

  const authContent = (
    <Fragment>
      <Button
        href="/create"
        variant="outline-primary"
        style={{ marginLeft: "2rem" }}
      >
        Create Team
      </Button>
      <Button
        href="/team"
        variant="outline-primary"
        style={{ marginLeft: "2rem" }}
      >
        My Team
      </Button>
      <Button
        onClick={() => logout()}
        variant="outline-primary"
        style={{ marginLeft: "2rem" }}
      >
        Logout
      </Button>
    </Fragment>
  );

  const navbarContent = user ? authContent : nonAuthContent;

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FPL Tools</Navbar.Brand>
        {navbarContent}
      </Navbar>
    </div>
  );
};

export default NavBar;
