import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// <Router basename={process.env.PUBLIC_URL}> => basename을 이렇게 설정해야 github 페이지에서 정상 작동
// local 환경이 아니라 github.io 환경에서 배포가 되는 것이다 보니
// route path가 의도와 다르게 설정되어 문제가 발생한 것입니다.
// 이를 해결하기 위해서는 react의 <Router> component의 basename 속성을 추가하면 됩니다.

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
        <Route path="hello" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
