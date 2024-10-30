import React, { useState } from "react";

const EventEx = () => {
	const [form, setForm] = useState({
		username: "",
		message: "",
	});
	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, //기존 폼 내용을 이 자리에 복사
			[e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
		};
		setForm(nextForm);
	};
	const onClick = () => {
		alert(username + " : " + message);

		setForm({
			username: "",
			message: "",
		});
	};
	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};

	return (
		<div>
			<h3>이벤트 연습</h3>
			<input
				type="text"
				name="username"
				placeholder="유저명 입력"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="메시지 입력"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default EventEx;
