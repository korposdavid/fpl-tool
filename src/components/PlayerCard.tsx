import React from "react";
import Player from "../models/Player";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = props => {
  const cardStatus = () => {
    const status = props.player.status;
    return status === "a" ? "success" : status === "i" ? "danger" : "warning";
  };

  return (
    <Card bg={cardStatus()} text="white">
      <Card.Body>
        <Container>
          <Row>
            <Col sm={9}>
              {" "}
              <Card.Title>
                {props.player.first_name.slice(0, 1) +
                  ". " +
                  props.player.second_name +
                  " (" +
                  props.player.team +
                  ")"}
              </Card.Title>
              <hr />
              <Card.Text>
                <Badge variant="primary">ICT: {props.player.ict_index}</Badge>
                <Badge variant="secondary">I: {props.player.influence}</Badge>
                <Badge variant="secondary">C: {props.player.creativity}</Badge>
                <Badge variant="secondary">T: {props.player.threat}</Badge>
              </Card.Text>
            </Col>
            <Col sm={3}>
              <Card.Text>Price: {props.player.now_cost / 10.0}</Card.Text>
              <hr />
              <Card.Text>Form: {props.player.form}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
