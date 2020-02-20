import React, { useState, useEffect, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import axios from "axios";
import Player from "../models/Player";
import Button from "react-bootstrap/Button";
import { useAuthentication } from "./AuthenticationProvider";

const PlayerListContainer = () => {
  const { user } = useAuthentication();

  const playerList = user ? user.squad : [];
  const userHasSquad = playerList.length > 0;

  const filterPlayersByPosition = (position: number) => {
    return playerList.filter(function(player: Player) {
      return player.element_type === position;
    });
  };

  const userSquad = (
    <Container>
      <Col sm={12} md={12}>
        <PlayerList
          players={filterPlayersByPosition(1)}
          title={"Goalkeepers"}
        ></PlayerList>
        <PlayerList
          players={filterPlayersByPosition(2)}
          title={"Defenders"}
        ></PlayerList>
        <PlayerList
          players={filterPlayersByPosition(3)}
          title={"Midfielders"}
        ></PlayerList>
        <PlayerList
          players={filterPlayersByPosition(4)}
          title={"Forwards"}
        ></PlayerList>
      </Col>
    </Container>
  );

  const noUserSquad = (
    <Fragment>
      <p>
        You don't have a team in our database, but you can create one on the
        Team Creator Page!
      </p>
      <Button href="/create">Team Creator Page</Button>
    </Fragment>
  );

  return userHasSquad ? userSquad : noUserSquad;
};

export default PlayerListContainer;
