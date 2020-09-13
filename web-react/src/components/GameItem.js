import React from 'react';

import Image from 'react-bootstrap/Image';

import {Link, useRouteMatch} from 'react-router-dom';

export default function GameItem(props) {
	let details = props.gameDetails;
	let thumbnailFilename = "/cdn/thumbnails/tn_" + details.id + ".png";
	let {url} = useRouteMatch();
	let link = url + (url.endsWith('/') ? "" : "/") + details.id;

	let className = "game-menu-item";
	if(props.isLast) {
		className += " last";
	}
	return (
		<Link to={link}>
			<Image
			  src={thumbnailFilename} 
			  width="200px" 
			  height="133px"
			  className={className}
			/>
		</Link>
	);
}
