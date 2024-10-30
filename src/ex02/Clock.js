import React from "react";

function Clock(props) {
	return (
		<div>
			<h4>안녕, 리액트!</h4>
			<h4>현재 시간 : {new Date().toLocaleTimeString()}</h4>
		</div>
	);
}

export default Clock;
