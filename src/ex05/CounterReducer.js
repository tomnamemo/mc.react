import React, { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "INCREMENT":
			return { value: state.value + 1 };
		case "DECREMENT":
			return { value: state.value - 1 };
		default: // 해당 케이스가 없을때
			return state;
	}
}

function CounterReducer(props) {
	const [state, dispatch] = useReducer(reducer, { value: 0 });
	return (
		<div>
			<p>
				현재 카운터 값은 <b>{state.value} 입니다. </b>
				<button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
				<button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
			</p>
		</div>
	);
}

export default CounterReducer;
