import React from 'react';
import PropTypes from 'prop-types';

export default function Panel(props) {
	return (
		<React.Fragment>
			<div className="green-panel-header round-top">
				<h2 style={{textAlign:"center"}}>
					{props.title}
				</h2>
			</div>
			<div className={"green-panel round-bottom bottom-ridge " + props.className}>
				{props.children}
			</div>
		</React.Fragment>
	);
}
Panel.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
};
Panel.defaultProps = {
	title: "",
	className: "",
}
