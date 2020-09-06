import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

export default class GameItem extends Component {
	render() {
		let details = this.props.gameDetails;
		let thumbnailFilename = "/cdn/thumbnails/tn_" + details.id + ".png";

		return (
			<Card style={{maxWidth:"200px"}}>
				<Card.Img variant="top" src={thumbnailFilename}/>
				<Card.Body>{details.title}</Card.Body>
			</Card>
		);
	}
}
