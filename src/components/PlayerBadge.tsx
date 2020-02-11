import React from "react";
import Card from "react-bootstrap/Card";
import Player from "../models/Player";

interface Props {
  player: Player;
}

const PlayerBadge: React.FC<Props> = props => {
  return (
    <Card
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        border: "0",
        display: "inline-block"
      }}
    >
      <Card.Body>
        <Card.Title>KEVIN DE BRUYNE</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PlayerBadge;
