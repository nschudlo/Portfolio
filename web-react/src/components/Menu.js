import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Menu extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Button>About</Button>
					<Button>Skills</Button>
					<Button>Portfolio</Button>
				</Row>
			</Container>
		);
	}
}
