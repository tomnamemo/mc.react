import React, { useState, useEffect } from "react";

const Info = () => {
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");

	//랜더링 될 때마다 매번 실행 됨
	// useEffect(() => {
	// 	console.log("렌더링 완료");
	// 	console.log(name, nickname);
	// });

	//빈배열을 ,[] 매개변수로 넘기면 마운트 될때 최초 한번만 실행 됨
	// useEffect(() => {
	// 	console.log("마운트 될때만 실행");
	// 	console.log(name, nickname);
	// }, []);

	//특정 인자를 매개변수로 넘겼을 때, 그녀석이 바뀔때마다 렌더링 됨
	// useEffect(() => {
	// 	console.log("마운트 될때만 실행");
	// 	console.log(name, nickname);
	// }, [name]);

	//useEffect clean up함수
	useEffect(() => {
		console.log("effect");
		console.log(name);
		return () => {
			console.log("clean up");
			console.log(name);
		};
	}, [name]);

	const onChangeName = (e) => {
		setName(e.target.value);
	};
	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<div>
			<p>인풋에 입력한 값 출력하기</p>
			<input
				type="text"
				name="name"
				value={name}
				onChange={onChangeName}
			/>
			<input
				type="text"
				name="nickname"
				value={nickname}
				onChange={onChangeNickname}
			/>
			<div>
				<b>이름: </b> {name} <br />
				<b>닉네임: </b> {nickname}
			</div>
		</div>
	);
};

export default Info;
