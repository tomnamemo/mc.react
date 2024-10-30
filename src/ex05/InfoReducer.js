import React, { useReducer } from "react";

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}

function InfoReducer(props) {
	const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
	const { name, nickname } = state;
	const onChange = (e) => {
		dispatch({ name: e.target.name, value: e.target.value }); //e.target 값 자체를 액션 값으로 사용
	};
	return (
		<div>
			<p>인풋에 입력한 값 출력하기</p>
			<input
				type="text"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="text"
				name="nickname"
				value={nickname}
				onChange={onChange}
			/>
			<div>
				<b>이름: </b> {name} <br />
				<b>닉네임: </b> {nickname}
			</div>
		</div>
	);
}

export default InfoReducer;
