import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
	console.log("평균값 계산중..");
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState([]);
	const onChange = (e) => {
		setNumber(e.target.value);
	};
	const onInsert = (e) => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber("");
	};
	// useMemo를 사용하여 평균값을 메모이제이션
	const average = useMemo(() => getAverage(list), [list]);
	return (
		<div>
			<input
				value={number}
				onChange={onChange}
			/>
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				<b>평균값:</b> {average}
			</div>
		</div>
	);
};

export default Average;
