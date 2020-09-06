import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert';

export default class GameItem extends Component {
	render() {
		let name = this.props.name;

		return (
			<Alert variant={"primary"}>{name}</Alert>
		);
	}
}
