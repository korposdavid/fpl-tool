import React from 'react'
import Player from '../models/Player'

interface Props {
    players: Player[];
}

const PlayerList: React.FC<Props> = (props) => {
    return (
        <div>
            {props.players.map(player => <div>{player.code}</div>)}
        </div>
    )
}

export default PlayerList
