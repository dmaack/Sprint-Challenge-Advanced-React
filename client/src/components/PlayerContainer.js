import React from 'react';
import PlayerCard from './PlayerCard';

class PlayerContainer extends React.Component {
    
    
    render() {
        console.log('player container props', this.props.players)
        return (
            <div className='card-container'>
                {this.props.playerData.map(player => <PlayerCard key={player.id} playerData={player} />)}
            </div>
        )
    }
}


export default PlayerContainer;