import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';



class PlayerCard extends React.Component {
    render() {
        return (
            <div className='cards'>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.playerData.name}</CardTitle>
                        <CardSubtitle>{this.props.playerData.country}</CardSubtitle>
                    </CardBody>
                    <CardText>{this.props.playerData.searches}</CardText>
                </Card>
            </div>
        )
    }
}

export default PlayerCard;