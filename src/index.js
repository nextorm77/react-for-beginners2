import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> // 렌더링을 2번 발생시킴
  <App />
  //</React.StrictMode>
);
