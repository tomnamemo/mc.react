import React, { useState, useEffect, useCallback, useRef } from "react";
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
import TodoTemplate from "./components/todo/TodoTemplate";
import TodoInsert from "./components/todo/TodoInsert";
import TodoList from "./components/todo/TodoList";

function App() {
	const [visible, setVisible] = useState(false);
	const [todos, setTodos] = useState([
		{ id: 1, text: "매일산책하기", checked: true },
		{ id: 2, text: "리액트 스터디하기", checked: true },
		{ id: 3, text: "세미프로젝트준비", checked: false },
	]);

	//항목추가 기능 구현
	const nextId = useRef(4);
	const onInsert = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				cheked: false,
			};
			setTodos(todos.concat(todo));
			nextId.current += 1;
		},
		[todos]
	);

	// 지우기 기능 구현
	const onRemove = useCallback(
		(id) => {
			//filter 함수는 기존 배열에서 특정 조건을 만족하는
			//원소들만 추출하여 새로운 배열 생성
			setTodos(todos.filter((todo) => todo.id !== id));
		},
		[todos]
	);

	//수정 기능 구현
	const onToggle = useCallback(
		(id) => {
			setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
		},
		[todos]
	);

	return (
		<>
			<TodoTemplate>
				<TodoInsert onInsert={onInsert} />
				<TodoList
					todos={todos}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			</TodoTemplate>
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
