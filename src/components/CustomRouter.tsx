import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PlayerListContainer from "./PlayerListContainer";
import { useAuthentication } from "./AuthenticationProvider";
import AuthPage from "./AuthPage";
import { RouteProps } from "react-router";
import { BrowserRouter } from "react-router-dom";
import TeamCreatorPage from "./TeamCreatorPage"

interface PrivateRouteProps extends RouteProps {
  [x: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const { user } = useAuthentication();
  const finalComponent = user ? props.component : AuthPage;

  return <Route {...props} component={finalComponent} />;
};

const CustomRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={AuthPage} />
      <PrivateRoute path="/team" component={PlayerListContainer} />
      <PrivateRoute path="/create" component={TeamCreatorPage} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

export default CustomRouter;
