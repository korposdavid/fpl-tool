import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import PitchContainer from "./PitchContainer";
import axios from "axios";

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

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <PlayerList players={playerList} title={"Goalkeepers"}></PlayerList>
      <PlayerList players={playerList} title={"Defenders"}></PlayerList>
      <PlayerList players={playerList} title={"Midfielders"}></PlayerList>
      <PlayerList players={playerList} title={"Forwards"}></PlayerList>
    </div>
  );
};

export default PlayerListContainer;
