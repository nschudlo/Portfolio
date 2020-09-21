import React from 'react';

import GameList from "./GameList";
import GamesView from "./GamesView";

import * as GameConstants from "../GameConstants";

export default function PortfolioView(props) {
	return (
		<div>
			<div className="green-back-panel bottom-ridge round-bottom">
				<GameList list={GameConstants.GAME_LIST}/>
			</div>
			<GamesView list={GameConstants.GAME_LIST}/>
		</div>
	);
}
