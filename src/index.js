import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

// console.warn 오버라이드
const originalWarn = console.warn;

console.warn = (...args) => {
	if (args[0].includes("@babel/plugin-proposal-private-property-in-object")) {
		return; // 이 경고는 무시
	}
	originalWarn(...args); // 원래의 console.warn 호출
};

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
	root.render(
		// <React.StrictMode>
		<App />
		// </React.StrictMode>
	);
}, 1000);
reportWebVitals();
