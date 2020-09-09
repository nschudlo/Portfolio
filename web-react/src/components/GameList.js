import React from 'react';

import GameItem from './GameItem';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function GameList(props) {
	let games = props.list.map((gameDetails) => {
		return (
			<Col sm="auto">
				<GameItem key={gameDetails.id} gameDetails={gameDetails}/>
			</Col>
		);
	});

	return (
		<Row noGutters>
			{games}
		</Row>
	);
}