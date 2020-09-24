import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Image from 'react-bootstrap/Image';
import Iframe from 'react-iframe'

import * as GameConstants from "../GameConstants";
import * as Utils from "../Utils";
import Panel from "./Panel";

const CLICK_TO_PLAY = "Click to Play ";
const CLICK_TO_WATCH = "Click to Watch ";

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

	if(showPreview) {
		game = (
			<Image 
			  onClick={() => setShowPreview(false)} 
			  src={"/cdn/previews/ss_" + details.id}
			  width="100%"
			/>
		);
	}

	let gameTitle = CLICK_TO_PLAY + details.title;
	if(details.id === GameConstants.MONKEY_FRACAS_JR_ID
			|| details.id === GameConstants.AMERICAN_GLADIATORS_ID) {
		gameTitle = CLICK_TO_WATCH + details.title;
	}

	// Setup the engine logo and description
	let engineLogo = (
		<Image 
		  src={"/cdn/logos/logo_" + details.engine}
		  width="100%"
		/>
	);
	let engineDescription = Utils.SplitArrayP(
		GameConstants.ENGINE_DESCRIPTIONS[details.engine]
	);

	// Setup the game description
	let description = Utils.SplitListP(details.description);

	// Setup the how to play panel
	let howToPlay = null;
	if('howToPlay' in details) {
		let howToWin = Utils.SplitListLi(details.howToWin);
		let instructions = Utils.SplitListLi(details.howToPlay);
		howToPlay = (
			<Panel title="How to Play">
				<h4>Goal:</h4>
				<ul>
					{howToWin}
				</ul>
				<h4>Controls:</h4>
				<ul>
					{instructions}
				</ul>
			</Panel>
		);
	}

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

	let banner = (
		<Image className="game-banner" src={bannerUrl}/>
	);

	return (
		<div>
			
			<Panel headerImage={bannerUrl} headerClassName="game-banner" className="clearfix">
				<div className="game-view-description-engine">
					{engineLogo}
					{engineDescription}
				</div>
				{description}
			</Panel>

			<Panel title={gameTitle}>
				<div 
				  className="d-flex justify-content-center" 
				  style={{position:"relative"}}>
					<div style={{width:details.width}}>
						{game}
					</div>
				</div>
			</Panel>

			{howToPlay}
		</div>
	);
}

GameView.propTypes = {
	details: PropTypes.object.isRequired,
	isVisible: PropTypes.bool.isRequired
};