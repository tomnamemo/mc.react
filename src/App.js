import React, { useState, useEffect } from "react";
import Library from "./ex01/Library";
import Clock from "./ex02/Clock";
import MyComponent from "./ex02/MyComponent";
import Say from "./ex03/Say";
import EventEx from "./ex04/EventEx";
import Counter from "./ex05/Counter";
import CounterReducer from "./ex05/CounterReducer";
import Info from "./ex05/Info";
import InfoReducer from "./ex05/InfoReducer";
import Average from "./ex05/Average";

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<h2>2024-10-29</h2>
			<h3>component (molecule)</h3>
			{/* <Library /> */}
			<hr />
			<h3>setInterval</h3>
			{/* <Clock /> */}
			<hr />
			<h3>props, defaultProps</h3>
			{/* <MyComponent
				nam="방굴이"
				age={9}
			/> */}
			<hr />
			<h3>useState()</h3>
			{/* <Say></Say> */}
			<hr />
			<h3>이벤트 핸들링</h3>
			{/* <EventEx /> */}
			<hr />
			<h2>2024-10-30</h2>
			<h3>hook- useState(), useEffect()</h3>
			<Counter />
			<Info />
			<hr />
			<h3>hook - useEffect() 뒷정리 함수 예시</h3>
			<div>
				<button
					onClickCapture={() => {
						setVisible(!visible);
					}}
				>
					{visible ? "인포컴포넌트 숨기기" : "인포컴포넌트 보여줘"}
				</button>
				{visible && <Info />}
			</div>
			<hr />
			<h3>hook - useReducer() ex1</h3>
			<p>CounterReducer 컴포넌트 함수 바깥에 함수 정의 switch case 문 사용</p>
			<CounterReducer />
			<h3>hook - useReducer() ex2</h3>
			<InfoReducer />
			<hr />
			<h3>hook - useMemo() </h3>
			<Average />
		</>
	);
}

export default App;
