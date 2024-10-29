import Clock from "./ex02/Clock";
import MyComponent from "./ex02/MyComponent";
import Library from "./ex01/Library";
import Say from "./ex03/Say";
import EventEx from "./ex04/EventEx";

function App() {
	return (
		<>
			<p>component (molecule)</p>
			<Library />
			<hr />
			<p>setInterval</p>
			<Clock />
			<hr />
			<p>props, defaultProps</p>
			<MyComponent
				nam="방굴이"
				age={9}
			/>
			<hr />
			<p>useState()</p>
			<Say></Say>
			<hr />
			<p>이벤트 핸들링</p>
			<EventEx />
		</>
	);
}

export default App;
