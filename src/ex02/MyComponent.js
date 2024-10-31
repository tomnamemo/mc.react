import React from "react";

function MyComponent(props) {
	return (
		<div>
			<h4>안녕하세요 제 이름은 {props.name} 입니다!</h4>
			<h4>나이는 {props.age} 입니다.</h4>
			<h4>견종은 {props.children} 입니다.</h4>
		</div>
	);
}

// MyComponent.defaultProps = {
// 	name: "김방울",
// 	children: "폼피츠",
// };

export default MyComponent;
