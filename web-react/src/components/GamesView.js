import React from 'react';
import PropTypes from 'prop-types';

import {useRouteMatch} from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

import GameView from './GameView';

export default function GamesView(props) {
	let match = useRouteMatch("*/:id");
	let activeKey = match !== null ? match.params.id : null;

	let games = props.list.map((gameDetails) => {
		// Show the first game if none are selected
		if(activeKey === null) {
			activeKey = gameDetails.id;
		}

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
		<Accordion activeKey={activeKey} style={{width:"100%"}}>
			{games}
		</Accordion>
	);
}

GamesView.propTypes = {
	list: PropTypes.array
};
