import React from "react";
import "./TodoTemplate.scss";

export default function TodoTemplate(props) {
	return (
		<div className="TodoTemplate">
			<div className="app-title">TODO LIST</div>
			<div className="content">{props.children}</div>
		</div>
	);
}
