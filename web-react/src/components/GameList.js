import React, { Component } from 'react';

import GameItem from './GameItem';
import Row from 'react-bootstrap/Row';

export default function GameList(props) {
	let games = props.list.map((gameDetails) => {
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