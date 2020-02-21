import React, { Fragment, useState } from "react";
import Player from "../models/Player";
import PlayerCard from "./PlayerCard";
import ListHeader from "./ListHeader";

interface Props {
  players: Player[];
  title: String;
  actionButtonFunction?: Function;
  actionButtonName?: string;
}

const PlayerList: React.FC<Props> = props => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Fragment>
      <ListHeader toggle={toggle} title={props.title} />
      {isToggled === false
        ? props.players.map(player => (
            <PlayerCard
              key={player.id}
              actionButtonFunction={props.actionButtonFunction}
              actionButtonName={props.actionButtonName}
              player={player}
            ></PlayerCard>
          ))
        : ""}
    </Fragment>
  );
};

export default PlayerList;
