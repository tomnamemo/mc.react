import React from "react";

function MyComponent(props) {
	return (
		<div>
			<h1>안녕하세요 제 이름은 {props.name} 입니다!</h1>
			<h2>나이는 {props.age} 입니다.</h2>
			<h2>견종은 {props.children} 입니다.</h2>
		</div>
	);
}

MyComponent.defaultProps = {
	name: "김방울",
	children: "폼피츠",
};

export default MyComponent;
