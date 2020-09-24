import React from 'react';

/**
 * Split a string by <br> and return array or <p> elements
 * @param list
 * @return
 */
export function SplitListP(list) {
	return list.split("<br>")
		.map((text) => (<p key={text}>{text}</p>));
}

/**
 * Takes an array of strings and returns array of <p>
 * @param array
 * @return
 */
export function SplitArrayP(array) {
	return array
		.map((text) => (<p key={text}>{text}</p>));	
}

/**
 * Split a string by <br> and return array or <li> elements
 * @param list
 * @param
 */
export function SplitListLi(list) {
	return list.split("<br>")
		.map((text) => (<li key={text}>{text}</li>));	
}