import React from 'react';
import PropTypes from 'prop-types';

import GameItem from './GameItem';

import SlidingMenu from "./SlidingMenu";

export default function GameList(props) {
	let games = props.list.map((gameDetails, index) => {
		return (
			<GameItem 
			  key={gameDetails.id} 
			  gameDetails={gameDetails}
			  isLast={index === (props.list.length-1)}
			/>
		);
	});

	return (
		<SlidingMenu>
			{games}
		</SlidingMenu>
	);
}

GameList.propTypes = {
	list: PropTypes.array
};
