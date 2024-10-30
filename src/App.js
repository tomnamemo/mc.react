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
import "./App.css";
import AccordionMui from "./components/AccordionMui";
function App() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<AccordionMui
				title={
					<>
						<h3>
							chapter 1.
							<p> component, setInterval(), props , defaultProps, event handling</p>
						</h3>
					</>
				}
				detail={
					<>
						<div className="ui-box">
							<h4>component (molecule)</h4>
							<Library />
						</div>
						<div className="ui-box">
							<h4>setInterval</h4>
							<Clock />
						</div>
						<div className="ui-box">
							<h4>props, defaultProps</h4>
							<MyComponent
								nam="방굴이"
								age={9}
							/>
						</div>
						<div className="ui-box">
							<h4>useState()</h4>
							<Say></Say>
						</div>
						<div className="ui-box">
							<h4>이벤트 핸들링</h4>
							<EventEx />
						</div>
					</>
				}
			/>
			<AccordionMui
				title={
					<>
						<h3>
							chapter 2. <p>useState(), useEffect(), 뒷정리 함수, useReducer(), useMemo()</p>
						</h3>
					</>
				}
				detail={
					<>
						<div className="ui-box">
							<h4>hook- useState(), useEffect()</h4>
							<Counter />
							<Info />
						</div>
						<div className="ui-box">
							<h4>hook - useEffect() 뒷정리 함수 예시</h4>
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
						</div>
						<div className="ui-box">
							<h4>hook - useReducer() ex1</h4>
							<p>CounterReducer 컴포넌트 함수 바깥에 함수 정의 switch case 문 사용</p>
							<CounterReducer />
						</div>
						<div className="ui-box">
							<h4>hook - useReducer() ex2</h4>
							<InfoReducer />
						</div>
						<div className="ui-box">
							<h4>hook - useMemo() </h4>
							<Average />
						</div>
					</>
				}
			/>
		</>
	);
}

export default App;
