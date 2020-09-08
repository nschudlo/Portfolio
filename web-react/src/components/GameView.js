import React, {useState, useEffect} from 'react';

import Image from 'react-bootstrap/Image';
import Iframe from 'react-iframe'

export default function GameView(props) {
	let details = props.details;
	let bannerUrl = "/cdn/banners/bn_" + details.id + ".png";

	let [showPreview, setShowPreview] = useState(true);

	if(!props.isVisible && !showPreview) {
		setShowPreview(true);
	}

	// Show the preview image until it is clicked
	let game = null;
	if(showPreview) {
		game = (
			<Image 
			  onClick={() => setShowPreview(false)} 
			  src={"/cdn/previews/ss_" + details.id}
			  fluid
			/>
		);
	} else {
		game = (
			<Iframe 
			  id={details.id + "_game"}
			  src={"/games/" + details.id}
			  width={details.width + "px"}
			  height={details.height + "px"}
			  scrolling="no"
			  frameBorder="0"
			/>
		);
	}

	useEffect(() => {
		// Need to set the focus on Night Shift when 
		// it's playing to make the controls work
		if(props.isVisible && !showPreview && details.id === "NightShift") {
			let iframe = document.getElementById('NightShift_game');
			if(iframe) {
				iframe.contentWindow.focus();
			}
		}
	});

	return (
		<div>
			<h1>{details.title}</h1>
			<Image src={bannerUrl} fluid/>
			<div className="d-flex justify-content-center">
				{game}
			</div>
		</div>
	);
}
