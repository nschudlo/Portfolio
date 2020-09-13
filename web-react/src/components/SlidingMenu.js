import React, {useRef, useEffect} from 'react';

import Image from 'react-bootstrap/Image';

const wrapperStyle = {
	position: "relative"
}

const leftArrowStyle = {
	position: "absolute",
	zIndex: "1"
}

const rightArrowStyle = {
	position: "absolute",
	right: "0",
	zIndex: "1"
}

export default function SlidingMenu(props) {
	let scrollWrapperEl = useRef(null);
	let leftArrowEl = useRef(null);
	let rightArrowEl = useRef(null);

	useEffect(() => {
		function handleResize() {
			updateArrows(
				scrollWrapperEl.current, 
				leftArrowEl.current, 
				rightArrowEl.current
			);
		}
		handleResize();

		// Update the arrows on a resize
		window.addEventListener('resize', handleResize);

		// Cleanup the listener
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<div style={wrapperStyle}>
			<Image 
			  className="sliding-menu-arrow showHandCursor" 
			  style={leftArrowStyle}
			  onClick={() => 
			  	onClickLeft(
			  		scrollWrapperEl.current, 
			  		leftArrowEl.current,
			  		rightArrowEl.current
			  	)}
			  src="/cdn/left.png"
			  ref={leftArrowEl}
			/>
			<Image 
			  className="sliding-menu-arrow showHandCursor" 
			  style={rightArrowStyle}
			  onClick={() => 
			  	onClickRight(
			  		scrollWrapperEl.current, 
			  		leftArrowEl.current, 
			  		rightArrowEl.current
			  	)}
			  src="/cdn/right.png"
			  ref={rightArrowEl}
			/>
			<div className="scrolling-wrapper" ref={scrollWrapperEl}>
				{props.children}
			</div>
		</div>
	);
}

/**
 * Move left in the menu by 1 thumbnail width.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
function onClickLeft(scrollContainer, leftArrow, rightArrow) {
	let targetLeft = Math.max(scrollContainer.scrollLeft - 250, 0);
	let interval = setInterval(() => {
		if(scrollContainer.scrollLeft > targetLeft) {
			scrollContainer.scrollLeft = scrollContainer.scrollLeft - 10;
		} else {
			clearInterval(interval);
			updateArrows(scrollContainer, leftArrow, rightArrow);
		}
	}, 8);
}

/**
 * Move right in the menu by 1 thumbnail width.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
function onClickRight(scrollContainer, leftArrow, rightArrow) {
	let maxWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
	let targetLeft = Math.min(scrollContainer.scrollLeft + 250, maxWidth);
	let interval = setInterval(() => {
		if(scrollContainer.scrollLeft < targetLeft) {
			scrollContainer.scrollLeft = scrollContainer.scrollLeft + 10;
		} else {
			clearInterval(interval);
			updateArrows(scrollContainer, leftArrow, rightArrow);
		}
	}, 8);
}

/**
 * Update the visibility of the scroll arrows.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
function updateArrows(scrollContainer, leftArrow, rightArrow) {
	if(scrollContainer.scrollLeft === 0) {
		leftArrow.classList.add("hidden");
	} else {
		leftArrow.classList.remove("hidden");
	}

	if(scrollContainer.scrollLeft === (scrollContainer.scrollWidth - scrollContainer.offsetWidth)) {
		rightArrow.classList.add("hidden");
	} else {
		rightArrow.classList.remove("hidden");
	}	
}