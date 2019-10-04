import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import image from '../images/soccerImg.jpg'


class PlayerCard extends React.Component {
    render() {
        return (
            
                <Card className='card'>
                    <CardBody className='card-body'>
                        <CardTitle className='name'>{this.props.playerData.name}</CardTitle>
                        <img width='100%' src={image} alt='image of soccer ball on field' />
                        <CardSubtitle className='player-country'>{this.props.playerData.country}</CardSubtitle>
                    </CardBody>
                    <CardText className='player-searches'><strong>Searches: </strong>{this.props.playerData.searches}</CardText>
                </Card>
          
        )
    }
}

export default PlayerCard;