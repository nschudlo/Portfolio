import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {Link} from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Link to="/"><Button>About</Button></Link>
					<Link to="/skills"><Button>Skills</Button></Link>
					<Link to="/portfolio"><Button>Portfolio</Button></Link>
				</Row>
			</Container>
		);
	}
}
