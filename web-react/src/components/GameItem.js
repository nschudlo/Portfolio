import React from 'react';

import Card from 'react-bootstrap/Card';

import {Link, useRouteMatch} from 'react-router-dom';

export default function GameItem(props) {
	let details = props.gameDetails;
	let thumbnailFilename = "/cdn/thumbnails/tn_" + details.id + ".png";
	let {url} = useRouteMatch();

	return (
		<div>
			<Link to={`${url}/` + details.id}>
				<Card style={{maxWidth:"200px"}}>
					<Card.Img variant="top" src={thumbnailFilename}/>
					<Card.Body>{details.title}</Card.Body>
				</Card>
			</Link>
		</div>
	);
}
