import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

import GameItem from './GameItem';

export default function GameList(props) {
	let games = props.list.map((gameDetails) => {
		return (
			<GameItem key={gameDetails.id} gameDetails={gameDetails}/>
		);
	});

	return (
		<div className="d-flex flex-wrap justify-content-around">
			{games}
		</div>
	);
}