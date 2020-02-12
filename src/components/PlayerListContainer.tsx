import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import axios from "axios";
import Player from "../models/Player";

const PlayerListContainer = () => {
  const [playerList, setPlayerList] = useState([]);

  const fetchPlayers = () => {
    console.log("fetching player list from server");
    axios({
      method: "get",
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

  return (
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
};

export default PlayerListContainer;
