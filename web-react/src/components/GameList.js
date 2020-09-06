import React, { Component } from 'react';

import GameItem from "./GameItem";

export default class GameList extends Component {
	render() {
		debugger;
		let games = this.props.list.map((game) => {
			return (
				<GameItem name={game}/>
			);
		});

		return (
			<div>{games}</div>
		);
	}
}