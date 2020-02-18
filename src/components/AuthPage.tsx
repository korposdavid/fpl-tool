import React, { Fragment } from "react";
import { useAuthentication } from "./AuthenticationProvider";
import Button from "react-bootstrap/Button";

const AuthPage = () => {
  const { user, login, logout } = useAuthentication();

  const message = user
    ? `Welcome on the home page of the application, you are authenticated!`
    : "Welcome on the FPL Tools Application! Please log in to use our features";

  const buttonMessage = user ? "Logout" : "Login";

  const onClickFunction = user ? logout : login;

  return (
    <Fragment>
      {message}
      <br />
      <Button onClick={() => onClickFunction()}>{buttonMessage}</Button>
    </Fragment>
  );
};

export default AuthPage;
