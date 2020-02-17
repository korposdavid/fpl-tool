import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PlayerListContainer from './PlayerListContainer'

const Router = () => (
  <Switch>
    <Redirect from="/" to="/home"/>
    <Route path="/home" component={PlayerListContainer} />
    <Route path="/details" component={PlayerListContainer} />
  </Switch>
);

export default Router;