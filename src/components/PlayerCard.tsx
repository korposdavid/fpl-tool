import React from "react";
import Player from "../models/Player";
import Card from "react-bootstrap/Card";
/*import Container from "react-bootstrap/Container";*/
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

interface Props {
  player: Player;
  actionButtonFunction?: Function;
  actionButtonName?: string;
}

const PlayerCard: React.FC<Props> = props => {
  const cardStatus = () => {
    const status = props.player.status;
    return status === "a" ? "success" : status === "i" ? "danger" : "warning";
  };

  const action = props.actionButtonFunction
    ? props.actionButtonFunction
    : () => {};

  const playerName =
    props.player.first_name.slice(0, 1) +
    ". " +
    props.player.second_name +
    " (" +
    props.player.teamObject.short_name +
    ")";

  const actionBar = props.actionButtonFunction ? (
    <Button variant="primary" onClick={() => action(props.player)}>
      {props.actionButtonName ? props.actionButtonName : ""}
    </Button>
  ) : (
    ""
  );

  return (
    <Card bg={cardStatus()} text="white">
      <Row>
        <Col sm={9}>
          <Card.Body>
            <Card.Title>{playerName}</Card.Title>
            <Card.Text>
              <Badge variant="primary">ICT: {props.player.ict_index}</Badge>
              <Badge variant="secondary">I: {props.player.influence}</Badge>
              <Badge variant="secondary">C: {props.player.creativity}</Badge>
              <Badge variant="secondary">T: {props.player.threat}</Badge>
              <Badge variant="secondary">
                Price: {props.player.now_cost / 10.0}
              </Badge>
              <Badge variant="secondary">Form: {props.player.form}</Badge>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={3}>
          <Card.Body>{actionBar}</Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PlayerCard;
