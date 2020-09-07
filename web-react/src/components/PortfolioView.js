import React, { Component } from 'react';

import GameList from "./GameList";
import GamesView from "./GamesView";

const GAME_LIST = [
  {
    id: "FruitShootRiot",
    title: "Fruit Shoot Riot",
  },
  {
    id: "CorpseCuisine",
    title: "Corpse Cuisine",
  }, 
  {
    id: "NightShift",
    title: "Night Shift",
  },
  {
    id: "MonkeyFracasJr",
    title: "Monkey Fracas Jr.",
  },
  {
    id: "AmericanGladiators",
    title: "American Gladiators",
  }
];

export default class PortfolioView extends Component {

	onGameClicked(gameId) {
		this.setState({selectedGameId:gameId});
	}

	render() {
		return (
			<div>
				<GamesView list={GAME_LIST}/>
				<GameList list={GAME_LIST}/>
			</div>
		);
	}
}
