import PropTypes from 'prop-types';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router';
import GameView from './GameView';

export default function GamesView(props) {
	let { id } = useParams();
	let activeKey = id;

	let games = props.list.map((gameDetails) => {
		// Show the first game if none are selected
		if (!activeKey) {
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
		<Accordion activeKey={activeKey} style={{ width: "100%" }}>
			{games}
		</Accordion>
	);
}

GamesView.propTypes = {
	list: PropTypes.array
};
