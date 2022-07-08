import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//<React.StrictMode> // 렌더링을 2번 발생시킴
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
