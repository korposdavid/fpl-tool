import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PlayerList from "./PlayerList";
import Player from "../models/Player";

const TeamCreatorPage = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [searchName, setSearchName] = useState("");
  const [foundPlayers, setFoundPlayers] = useState<Player[]>([]);

  const fetchSearch = (name: string) => {
    if (name.length < 2) {
      return;
    }
    console.log("fetching results..");
    fetch("http://localhost:8080/players/filter/" + name, {
      credentials: "include"
    }).then(response => {
      response.text().then(body => {
        setFoundPlayers(JSON.parse(body));
      });
    });
  };

  const addPlayerToTeam = (player: Player) => {
    if (selectedPlayers.includes(player)) {
      return;
    }
    setSelectedPlayers([player, ...selectedPlayers]);
  };

  const removePlayerFromTeam = (player: Player) => {
    setSelectedPlayers(selectedPlayers.filter(x => x !== player));
  }

  useEffect(() => {
    fetchSearch(searchName.trim());
  }, [searchName]);

  return (
    <Container>
      <Row>
        <Col sm={12} md={12}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Player Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Input Name Here"
              aria-label="Player Name"
              aria-describedby="basic-addon1"
              value={searchName}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setSearchName(e.currentTarget.value);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6}>
          <PlayerList
            players={foundPlayers}
            title={"Found Players"}
            actionButtonFunction={addPlayerToTeam}
            actionButtonName="+"
          ></PlayerList>
        </Col>
        <Col sm={6} md={6}>
          <PlayerList
            players={selectedPlayers}
            title={"Selected Players"}
            actionButtonFunction={removePlayerFromTeam}
            actionButtonName="-"
          ></PlayerList>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCreatorPage;
