import React from "react";
import Player from "../models/Player";
import PlayerCard from "./PlayerCard";
import ListHeader from "./ListHeader";

interface Props {
  players: Player[];
  title: String;
}

const PlayerList: React.FC<Props> = props => {
  return (
    <div>
      <ListHeader title={props.title} />
      {props.players.map(player => (
        <PlayerCard player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default PlayerList;
