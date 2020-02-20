import React, { useState, useContext, useEffect, createContext } from "react";
import UserModel from "../models/UserModel";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

interface Props {
  [x: string]: any;
}

interface AuthContextInterface {
  user: UserModel | undefined;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>({
  user: undefined,
  login: () => {},
  logout: () => {}
});

const AuthenticationProvider: React.FC<Props> = props => {
  const [user, setUser] = useState<UserModel | undefined>(undefined);
  const [cookies] = useCookies();

  useEffect(() => {
    fetch("http://localhost:8080/api/user", { credentials: "include" }).then(
      response => {
        response.text().then(body => {
          if (body === "") {
            setUser(undefined);
          } else {
            setUser(JSON.parse(body));
          }
        });
      }
    );
  }, []);

  const loginFunc = () => {
    let port = window.location.port ? ":" + window.location.port : "";
    if (port === ":3000") {
      port = ":8080";
    }
    window.location.href = "//" + window.location.hostname + port + "/private";
  };

  const logoutFunc = () => {
    fetch("http://localhost:8080/api/logout", {
      method: "POST",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": cookies["XSRF-TOKEN"] }
    }).then(res => {
      console.log("User logout successful");
      setUser(undefined);
    });
  };

  const auth = {
    user,
    login: loginFunc,
    logout: logoutFunc
  };

  return (
    <CookiesProvider>
      <AuthContext.Provider value={auth} {...props} />{" "}
    </CookiesProvider>
  );
};

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);
