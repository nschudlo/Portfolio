import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

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
			case GameConstants.FIREBALL_ID:
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
			  width="100%"
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

	// Setup the engine logo and description
	let engineLogo = (
		<Image 
		  src={"/cdn/logos/logo_" + details.engine}
		  width="100%"
		/>
	);
	let engineDescription = GameConstants.ENGINE_DESCRIPTIONS[details.engine]
		.map(text => (<p key={text}>{text}</p>));

	// Setup the game description
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
				<Image className="game-banner" src={bannerUrl}/>
			</div>
			<div className="green-back-panel round-bottom bottom-ridge">
				<div className="game-view-description-engine">
					{engineLogo}
					{engineDescription}
				</div>
				<h2>{details.title}</h2>
				{description}
			</div>
			<div 
			  className="d-flex justify-content-center
			    green-back-panel round-bottom round-top bottom-ridge" 
			  style={{position:"relative"}}>
				{clickToPlay}
				<div style={{width:details.width}}>
					{game}
				</div>
			</div>
		</div>
	);
}

GameView.propTypes = {
	details: PropTypes.object.isRequired,
	isVisible: PropTypes.bool.isRequired
};