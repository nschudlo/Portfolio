import React, {useState, useEffect} from 'react';

import Image from 'react-bootstrap/Image';
import Iframe from 'react-iframe'

import * as GameConstants from "../GameConstants";

const CLICK_TO_PLAY_URL = "/cdn/clickToPlay.png";

export default function GameView(props) {
	let details = props.details;
	let bannerUrl = "/cdn/banners/bn_" + details.id + ".png";

	let [showPreview, setShowPreview] = useState(true);

	// Show the preview image until it is clicked
	if(!props.isVisible && !showPreview) {
		setShowPreview(true);
	}

	let game = null;
	if(!showPreview) {
		switch(details.id) {
			// Setup the swf object
			case GameConstants.CORPSE_CUISINE_ID:
				game = (
					<object 
					  aria-label="Corpse Cuisine"
					  id="corpsecuisine" 
					  data="/games/CorpseCuisine/Zero.swf"
					  width={details.width + "px"}
					  height={details.height + "px"}
					/>
				);
				break;

			// Setup the game in an iframe
			case GameConstants.FRUIT_SHOOT_RIOT_ID:
			case GameConstants.NIGHT_SHIFT_ID:
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
				break;

			//Setup the YouTube video
			case GameConstants.MONKEY_FRACAS_JR_ID:
			case GameConstants.AMERICAN_GLADIATORS_ID:
				game = (
					<Iframe 
					  width={details.width + "px"}
					  height={details.height + "px"}
					  src={"//www.youtube.com/embed/" +details.YouTubeId+ "?rel=0&showinfo=0"} 
					  frameBorder="0" 
					  allowFullScreen
					/>
				);
				break;
			default:
				setShowPreview(true);

		}
	}

	let clickToPlay = null;
	if(showPreview) {
		game = (
			<Image 
			  onClick={() => setShowPreview(false)} 
			  src={"/cdn/previews/ss_" + details.id}
			  width={details.width + "px"}
			  height={details.height + "px"}
			/>
		);

		clickToPlay = (
			<Image 
			  src={CLICK_TO_PLAY_URL} 
			  style={{
			  	position:"absolute", 
			  	marginLeft: details.clickMarginLeft,
			  }}
			/>
		);
	}

	let description = details.description.split("<br>")
		.map((text) => (<p key={text}>{text}</p>));

	useEffect(() => {
		// Need to set the focus on Night Shift when 
		// it's playing to make the controls work
		if(props.isVisible && !showPreview && details.id === GameConstants.NIGHT_SHIFT_ID) {
			let iframe = document.getElementById('NightShift_game');
			if(iframe) {
				iframe.contentWindow.focus();
			}
		}
	});

	return (
		<div>
			<div className="d-flex justify-content-center">
				<Image src={bannerUrl} width="100%"/>
			</div>
			<div>
				{description}
			</div>
			<div className="d-flex justify-content-center">
				{clickToPlay}
				{game}
			</div>
		</div>
	);
}
