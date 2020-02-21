import React, { Fragment, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Player from "../models/Player";

interface Props {
  selectedPlayers: Player[];
  validSetter: Function;
}

const PositionCounterComponent: React.FC<Props> = props => {
  const players = props.selectedPlayers;
  const validSetter = props.validSetter;

  const countPosition = (type: number) =>
    players.filter(x => x.element_type === type).length;

  const checkValidity = () => {
    if (
      countPosition(1) === 2 &&
      countPosition(2) === 5 &&
      countPosition(3) === 5 &&
      countPosition(4) === 3
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    validSetter(checkValidity());
    // eslint-disable-next-line
  }, [players, validSetter]);

  return (
    <Fragment>
      <InputGroup.Text>GK</InputGroup.Text>
      <InputGroup.Text>{countPosition(1)}</InputGroup.Text>
      <InputGroup.Text>DEF</InputGroup.Text>
      <InputGroup.Text>{countPosition(2)}</InputGroup.Text>
      <InputGroup.Text>MID</InputGroup.Text>
      <InputGroup.Text>{countPosition(3)}</InputGroup.Text>
      <InputGroup.Text>FW</InputGroup.Text>
      <InputGroup.Text>{countPosition(4)}</InputGroup.Text>
    </Fragment>
  );
};

export default PositionCounterComponent;
