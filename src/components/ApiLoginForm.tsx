import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ApiLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendLoginRequest = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/fpl-api-login",
      data: {
        email: email,
        password: password
      }
    }).then(response => {
        console.log(response);
        setIsLoading(false);
    });
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    sendLoginRequest();
  };

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>FPL Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Form.Group>
        <Button variant="primary" disabled={isLoading} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ApiLoginForm;
