import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert({ onInsert }) {
	const [value, setValue] = useState("");
	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);
	const onSubmit = useCallback(
		(e) => {
			onInsert(value);
			setValue("");
			//submit 이벤트는 브라우저에 새로고침을
			//발생시키므로 아래 함수를 호출
			e.preventDefault();
		},
		[onInsert, value]
	);

	return (
		<form
			className="TodoInsert"
			onSubmit={onSubmit}
		>
			<input
				type="text"
				placeholder="할 일을 입력하세요"
				onChange={onChange}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInsert;
