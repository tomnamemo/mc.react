import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
	root.render(
		<React.StrictMode>
			<App />
			{/* <Clock /> */}
		</React.StrictMode>
	);
}, 1000);
reportWebVitals();
