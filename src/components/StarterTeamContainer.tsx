import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import PitchContainer from "./PitchContainer";
import axios from "axios";

const StarterTeamContainer = () => {
  const [playerList, setPlayerList] = useState([]);

  const fetchPlayers = () => {
    console.log("fetching player list from server");
    axios({
      method: "get",
      url: "http://localhost:8080/players/47,181,65,308,291,191,215,342,150,313,187,93,468,164,271"
    }).then(response => {
      setPlayerList(response.data);
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={7}>
            <PitchContainer />
          </Col>
          <Col sm={5}>
            <PlayerList players={playerList}></PlayerList>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StarterTeamContainer;
