import React from 'react';

import GameList from "./GameList";
import GamesView from "./GamesView";

const GAME_LIST = [
  {
    id: "FruitShootRiot",
    title: "Fruit Shoot Riot",
    width: 900,
    height: 506,
  },
  {
    id: "CorpseCuisine",
    title: "Corpse Cuisine",
  }, 
  {
    id: "NightShift",
    title: "Night Shift",
    width: 900,
    height: 600,
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

export default function PortfolioView(props) {
	return (
		<div>
			<GamesView list={GAME_LIST}/>
			<GameList list={GAME_LIST}/>
		</div>
	);
}
