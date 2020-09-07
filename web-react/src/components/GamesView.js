import React from 'react';

import {useRouteMatch} from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

import GameView from './GameView';

export default function GamesView(props) {

	let games = props.list.map((gameDetails) => {
		return (
			<Accordion.Collapse eventKey={gameDetails.id} key={gameDetails.id}>
				<div><GameView details={gameDetails}/></div>
			</Accordion.Collapse>
			
		);
	});

	let match = useRouteMatch("/portfolio/:id");
	let activeKey = match !== null ? match.params.id : null;

	return (
		<div className="d-flex justify-content-center">
			<Accordion activeKey={activeKey}>
				{games}
			</Accordion>
		</div>
	);
}
