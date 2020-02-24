import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PlayerList from "./PlayerList";
import Player from "../models/Player";
import Button from "react-bootstrap/Button";
import PositionCounterComponent from "./PositionCounterComponent";
import axios from "axios";

const TeamCreatorPage = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [searchName, setSearchName] = useState("");
  const [foundPlayers, setFoundPlayers] = useState<Player[]>([]);
  const [selectedIsValid, setSelectedIsValid] = useState(false);

  const fetchSearch = (name: string) => {
    if (name.length < 2) {
      return;
    }
    console.log("fetching results..");
    axios({
      method: "get",
      url: "http://localhost:8080/players/name/" + name,
      withCredentials: true
    }).then(response => {
      setFoundPlayers(response.data);
    });
  };

  const addPlayerToTeam = (player: Player) => {
    if (selectedPlayers.filter(x => x.id === player.id).length>0) {
      return;
    }
    setSelectedPlayers([player, ...selectedPlayers]);
  };

  const removePlayerFromTeam = (player: Player) => {
    setSelectedPlayers(selectedPlayers.filter(x => x !== player));
  };

  useEffect(() => {
    fetchSearch(searchName.trim());
  }, [searchName]);

  const submitTeam = () => {
    console.log("submitting team");
    axios({
      method: "post",
      url: "http://localhost:8080/squad",
      withCredentials: true,
      data: {
        players: selectedPlayers.map(player => player.id)
      }
    })
      .then(response => {
        console.log(response.data);
        window.location.href = "http://localhost:3000/team";
      })
      .catch(e => {
        console.log(e.response.data);
      });
  };

  const selectedTeamInfo = () => {
    if (selectedIsValid) {
      return "Click to Submit"
    }
    return "Please select 2 goalkeepers, 5 defenders, 5 midfielders and 3 forwards";
  };

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
            <InputGroup.Append>
              <PositionCounterComponent
                validSetter={setSelectedIsValid}
                selectedPlayers={selectedPlayers}
              ></PositionCounterComponent>
              <Button
                variant="outline-primary"
                disabled={!selectedIsValid}
                onClick={() => submitTeam()}
                title={selectedTeamInfo()}
              >
                Save Selected Team
              </Button>
            </InputGroup.Append>
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
