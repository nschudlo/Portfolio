import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

export default class GameItem extends Component {
	render() {
		let name = this.props.name;

		return (
			<Card style={{maxWidth:"200px"}}>
				<Card.Img variant="top" src="/cdn/chamber6.png"/>
				<Card.Body>{name}</Card.Body>
			</Card>
		);
	}
}
