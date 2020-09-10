import React from 'react';

import GameList from "./GameList";
import GamesView from "./GamesView";

import * as GameConstants from "../GameConstants";

export default function PortfolioView(props) {
	return (
		<div>
			<GameList list={GameConstants.GAME_LIST}/>
			<GamesView list={GameConstants.GAME_LIST}/>
		</div>
	);
}
