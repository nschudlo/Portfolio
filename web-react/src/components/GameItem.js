import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';

export default function GameItem(props) {
	let details = props.gameDetails;
	let thumbnailFilename = "/cdn/thumbnails/tn_" + details.id + ".png";

	let className = "game-menu-item";
	if (props.isLast) {
		className += " last";
	}
	return (
		<Link to={`../${details.id}`}>
			<Image
				src={thumbnailFilename}
				width="200px"
				height="133px"
				className={className}
			/>
		</Link>
	);
}
GameItem.propTypes = {
	gameDetails: PropTypes.object,
	isLast: PropTypes.bool
};
