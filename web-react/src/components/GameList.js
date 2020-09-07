import React from 'react';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';

import GameItem from './GameItem';

export default function GameList(props) {
	let games = props.list.map((gameDetails) => {
		return (
			<GameItem key={gameDetails.id} gameDetails={gameDetails}/>
		);
	});

	return (
		<Row className="justify-content-around">
			{games}
		</Row>
	);
}