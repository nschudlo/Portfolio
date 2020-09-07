import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import {Link} from 'react-router-dom';

export default function Menu(props) {
	return (
		<Row>
			<Link to="/"><Button>About</Button></Link>
			<Link to="/skills"><Button>Skills</Button></Link>
			<Link to="/portfolio"><Button>Portfolio</Button></Link>
		</Row>
	);
}
