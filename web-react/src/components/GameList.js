import React from 'react';

import GameItem from './GameItem';

import SlidingMenu from "./SlidingMenu";

export default function GameList(props) {
	let games = props.list.map((gameDetails) => {
		return (
			<GameItem 
			  key={gameDetails.id} 
			  gameDetails={gameDetails}
			  className="scrolling-card"
			/>
		);
	});

	return (
		<SlidingMenu>
			{games}
		</SlidingMenu>
	);
}