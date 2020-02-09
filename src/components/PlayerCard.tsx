import React from "react";
import Player from "../models/Player";
import Card from "react-bootstrap/Card";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = props => {
    const cardStatus = () => {
        const news = props.player.news;
        return news === "" ? "success" : "warning";
    }

  return (
    <Card bg={cardStatus()} text="white">
      <Card.Body>
        <Card.Title>{props.player.first_name + " " + props.player.second_name}</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
