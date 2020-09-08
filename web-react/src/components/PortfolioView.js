import React from 'react';

import GameList from "./GameList";
import GamesView from "./GamesView";

import * as GameConstants from "../GameConstants";

export default function PortfolioView(props) {
	return (
		<div>
			<GamesView list={GameConstants.GAME_LIST}/>
			<GameList list={GameConstants.GAME_LIST}/>
		</div>
	);
}
