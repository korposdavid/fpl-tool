import React from "react";
import Card from "react-bootstrap/Card";
import Player from "../models/Player";
import PlayerBadge from "../components/PlayerBadge";
import CardGroup from "react-bootstrap/CardGroup";

interface Props {
  players: Player[];
}

const PitchContainer: React.FC<Props> = props => {
  const bgImage =
    "https://johnburnmurdoch.github.io/football-pitch-tracker/half-rotate.png";
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        minWidth: "650px"
      }}
    >
      <CardGroup style={{ width: "20%", textAlign: "center" }}>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
      </CardGroup>
      <CardGroup style={{ width: "60%", textAlign: "center" }}>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
      </CardGroup>
      <CardGroup style={{ width: "100%", textAlign: "center" }}>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
      </CardGroup>
      <CardGroup style={{ width: "40%", textAlign: "center" }}>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
        <PlayerBadge player={props.players[0]}></PlayerBadge>
      </CardGroup>
    </div>
  );
};

export default PitchContainer;
