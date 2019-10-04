import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';



class PlayerCard extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card className='cards'>
                    <CardBody className='card-body'>
                        <CardTitle className='player-name'>{this.props.playerData.name}</CardTitle>
                        <CardSubtitle className='player-country'>{this.props.playerData.country}</CardSubtitle>
                    </CardBody>
                    <CardText className='player-searches'><strong>Searches: </strong>{this.props.playerData.searches}</CardText>
                </Card>
            </div>
        )
    }
}

export default PlayerCard;