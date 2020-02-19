import React, { useState, useEffect, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import axios from "axios";
import Player from "../models/Player";
import Button from "react-bootstrap/Button";
import { useAuthentication } from "./AuthenticationProvider";

const PlayerListContainer = () => {
  const [playerList, setPlayerList] = useState([]);
  const { user } = useAuthentication();

  const fetchPlayers = () => {
    console.log("fetching player list from server");
    axios({
      method: "get",
      withCredentials: true,
      url:
        "http://localhost:8080/players/47,181,65,308,291,191,215,342,150,313,187,93,468,164,271"
    }).then(response => {
      setPlayerList(response.data);
    });
  };

  const filterPlayersByPosition = (position: number) => {
    return playerList.filter(function(player: Player) {
      return player.element_type === position;
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const userHasSquad = (
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

  const noSquadForUser = (
    <Fragment>
      <p>
        You don't have a team in our database, but you can create one on the
        Team Creator Page!
      </p>
      <Button href="/create">Team Creator Page</Button>
    </Fragment>
  );

  return (user && user.squad.length>0) ? userHasSquad : noSquadForUser;
};

export default PlayerListContainer;
