import React from 'react';

import Image from 'react-bootstrap/Image';

import {Link, useRouteMatch} from 'react-router-dom';

export default function GameItem(props) {
	let details = props.gameDetails;
	let thumbnailFilename = "/cdn/thumbnails/tn_" + details.id + ".png";
	let {url} = useRouteMatch();

	return (
		<Link to={`${url}/` + details.id}>
			<Image
			  className="grow"
			  src={thumbnailFilename} 
			  width="200px" 
			  height="133px"
			/>
		</Link>
	);
}
