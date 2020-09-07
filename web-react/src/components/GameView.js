import React from 'react';

import Image from 'react-bootstrap/Image';

export default function GameView(props) {
	let details = props.details;
	let imageUrl = "/cdn/banners/bn_" + details.id + ".png";
	return (
		<div>
			<h1>{details.title}</h1>
			<Image src={imageUrl} fluid/>
		</div>
	);
}
