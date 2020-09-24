import React from 'react';
import PropTypes from 'prop-types';

import Image from 'react-bootstrap/Image';

export default function Panel(props) {
	let header = null;

	// If a header image is provided use that
	if(props.headerImage !== null) {
		header = (
			<Image 
			  className={props.headerClassName + " round-top"} 
			  src={props.headerImage}
			/>
		);
	} else {
		header = (
			<div className="panel-header round-top">
				<h2 style={{textAlign:"center"}}>
					{props.title}
				</h2>
			</div>
		);
	}

	return (
		<React.Fragment>
			{header}		
			<div className={"panel round-bottom bottom-ridge " + props.className}>
				{props.children}
			</div>
		</React.Fragment>
	);
}
Panel.propTypes = {
	headerImage: PropTypes.string,
	headerClassName: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
};
Panel.defaultProps = {
	headerImage: null,
	headerClassName: "",
	title: "",
	className: "",
}
