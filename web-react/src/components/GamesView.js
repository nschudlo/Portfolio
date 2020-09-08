import React from 'react';

import {useRouteMatch} from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

import GameView from './GameView';

export default function GamesView(props) {
	let match = useRouteMatch("/portfolio/:id");
	let activeKey = match !== null ? match.params.id : null;

	let games = props.list.map((gameDetails) => {
		let isVisible = activeKey === gameDetails.id;
		return (
			<Accordion.Collapse eventKey={gameDetails.id} key={gameDetails.id}>
				<div>
					<GameView 
					  details={gameDetails} 
					  isVisible={isVisible}
					/>
				</div>
			</Accordion.Collapse>
		);
	});

	return (
		<div className="d-flex justify-content-center">
			<Accordion activeKey={activeKey}>
				{games}
			</Accordion>
		</div>
	);
}
