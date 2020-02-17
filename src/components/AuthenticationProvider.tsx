import React, { useState, useContext, useMemo, createContext } from "react";
import UserModel from "../models/UserModel";

interface Props {
  [x: string]: any;
}

interface AuthContextInterface {
  user: UserModel | null;
  login: (user: UserModel) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  login: (user: UserModel) => {},
  logout: () => {}
});

const AuthenticationProvider: React.FC<Props> = props => {
  const [user, setUser] = useState<UserModel | null>(null);

  const auth = {
    user,
    login: (user: UserModel) => setUser(user),
    logout: () => setUser(null)
  };

  return <AuthContext.Provider value={auth} {...props} />;
};

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);
