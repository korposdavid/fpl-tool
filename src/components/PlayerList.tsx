import React from 'react'
import Player from '../models/Player'
import PlayerCard from './PlayerCard';

interface Props {
    players: Player[];
}

const PlayerList: React.FC<Props> = (props) => {
    return (
        <div>
            {props.players.map(player => <PlayerCard player={player}></PlayerCard>)}
        </div>
    )
}

export default PlayerList
