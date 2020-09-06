import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Menu extends Component {
	render() {
		return (
			<div>
				<Button>Home</Button>
				<Button>Away</Button>
			</div>
		);
	}
}
