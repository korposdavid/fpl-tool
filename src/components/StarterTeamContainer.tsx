import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerList from "./PlayerList";
import axios from "axios";

const StarterTeamContainer = () => {
  const [playerList, setPlayerList] = useState([]);

  const fetchPlayers = () => {
    console.log("fetching player list from server");
    axios({
      method: "get",
      url: "http://localhost:8080/my-team/1"
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
          <Col sm={8}></Col>
          <Col sm={4}>
            <PlayerList players={playerList}></PlayerList>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StarterTeamContainer;
