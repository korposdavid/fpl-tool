import React, { useState, useContext, useEffect, createContext } from "react";
import UserModel from "../models/UserModel";
import { useCookies } from "react-cookie";

interface Props {
  [x: string]: any;
}

interface AuthContextInterface {
  user: UserModel | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  login: () => {},
  logout: () => {}
});

const AuthenticationProvider: React.FC<Props> = props => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [cookies] = useCookies(["XSRF-TOKEN"]);

  useEffect(() => {
    console.log("useEffect runs in authprovider");
    fetch("http://localhost:8080/api/user", { credentials: "include" }).then(
      response => {
        response.text().then(body => {
          if (body === "") {
            setUser(null);
          } else {
            setUser(JSON.parse(body));
          }
        });
      }
    );
  }, []);

  const loginFunc = () => {
    console.log("loginfunc runs in authprovider");
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
      headers: { "X-XSRF-TOKEN": cookies.verbose }
    })
      .then(res => res.json())
      .then(response => {
        window.location.href =
          response.logoutUrl +
          "?id_token_hint=" +
          response.idToken +
          "&post_logout_redirect_uri=" +
          window.location.origin;
      });
    setUser(null);
  };

  const auth = {
    user,
    login: loginFunc,
    logout: logoutFunc
  };

  return <AuthContext.Provider value={auth} {...props} />;
};

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);
