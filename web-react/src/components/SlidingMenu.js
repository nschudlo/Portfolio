import React, { useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';

/**
 * The amount to scroll each 
 * interval.
 */
const JUMP = 10;

/**
 * Delay between micro scrolls
 */
const JUMP_DELAY_MS = 8;

/**
 * The amount to scroll when 
 * the arrows are clicked.
 */
const SCROLL_AMOUNT = 250;

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
 * Move left in the menu.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
async function onClickLeft(scrollContainer, leftArrow, rightArrow) {
	let targetLeft = Math.max(scrollContainer.scrollLeft - SCROLL_AMOUNT, 0);
	await scrollTo(scrollContainer, targetLeft);
	updateArrows(scrollContainer, leftArrow, rightArrow);
}

/**
 * Move right in the menu.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
async function onClickRight(scrollContainer, leftArrow, rightArrow) {
	let maxWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
	let targetLeft = Math.min(scrollContainer.scrollLeft + SCROLL_AMOUNT, maxWidth);
	await scrollTo(scrollContainer, targetLeft);
	updateArrows(scrollContainer, leftArrow, rightArrow);
}

/**
 * Smoothly scroll to a position.
 * @param scrollContainer
 * @param targetLeft
 */
function scrollTo(scrollContainer, targetLeft) {
	let goingRight = scrollContainer.scrollLeft < targetLeft;
	return new Promise(resolve => {
		let interval = setInterval(() => {
			let left = scrollContainer.scrollLeft;

			// Need to move right
			if (left < targetLeft) {
				scrollContainer.scrollLeft = left + JUMP;

				// Need to move left
			} else if (scrollContainer.scrollLeft > targetLeft) {
				scrollContainer.scrollLeft = left - JUMP;
			}

			// The target has been hit
			if ((goingRight && left >= targetLeft) || (!goingRight && left <= targetLeft)) {
				scrollContainer.scrollLeft = targetLeft;
				clearInterval(interval);
				resolve();
				return;
			}
		}, JUMP_DELAY_MS);
	});
}

/**
 * Update the visibility of the scroll arrows.
 * @param scrollContainer
 * @param leftArrow
 * @param rightArrow
 */
function updateArrows(scrollContainer, leftArrow, rightArrow) {
	if (scrollContainer.scrollLeft === 0) {
		leftArrow.classList.add("hidden");
	} else {
		leftArrow.classList.remove("hidden");
	}

	if (scrollContainer.scrollLeft === (scrollContainer.scrollWidth - scrollContainer.offsetWidth)) {
		rightArrow.classList.add("hidden");
	} else {
		rightArrow.classList.remove("hidden");
	}
}
