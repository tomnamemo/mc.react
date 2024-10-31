## React Project Based on the Multi-Campus Curriculum

#### props, defaultProps
	ex01/Book, Library

#### setInterval
	ex02/Clock, MyComponent

#### useState()
	ex03/Say

#### event handling
	ex04/EventEx (onChange, onClick, onKeyPress)

#### hook use시리즈
###### useState(), useEffect() , 뒷정리 함수
	ex05/Counter - useState()
	ex05/Info - useEffect() , 뒷정리 함수 예시 App.js
###### useReducer()
	useState 보다 더 다양한 컴포넌트의 상태값을 업데이트 해주고 싶을때
	ex05/CounterReducer -> swith case 문 사용
	ex05/InfoReducer -> 인풋여러개일때
###### useMemo()
	함수형 컴포넌트 내 발생연산 최적화
	ex05/Average


#### todolist 만들기
	npm install sass
	npm install react-icons
	npm install classnames

##### App.js 에서 todos 상태 사용 , 항목추가 & 삭제, 언체크 기능 구현
##### App.js
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
			</>
		);
	}

	export default App;




##### TodoInsert.js
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


##### TodoListItem.js
	const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;
		return (
			<div className="TodoListItem">
				<div
					className={classNames("checkbox", { checked })}
					onClick={() => onToggle(id)}
				>
					{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

					<div className="text">{text}</div>
				</div>
				<div
					className="remove"
					onClick={() => onRemove(id)}
				>
					<MdRemoveCircleOutline />
				</div>
			</div>
		);
	};
	export default TodoListItem;

##### TodoList.js
	const TodoList = ({ todos, onRemove, onToggle }) => {
		return (
			<div className="TodoList">
				{todos.map((todo) => (
					<TodoListItem
						todo={todo}
						key={todo.id}
						onRemove={onRemove}
						onToggle={onToggle}
					/>
				))}
			</div>
		);
	};
	export default TodoList;

##### TodoTemplate.js
	export default function TodoTemplate(props) {
		return (
			<div className="TodoTemplate">
				<div className="app-title">일정관리</div>
				<div className="content">{props.children}</div>
			</div>
		);
	}