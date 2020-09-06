import React, { Component } from 'react';

import GameItem from './GameItem';
import Row from 'react-bootstrap/Row';

export default class GameList extends Component {
	render() {
		let games = this.props.list.map((gameDetails) => {
			return (
				<GameItem key={gameDetails.id} gameDetails={gameDetails}/>
			);
		});

		return (
			<Row>
				{games}
			</Row>
		);
	}
}