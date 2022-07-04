import { useState, useEffect } from "react";

// React.js 의 동작 방식
// : state를 변화시키면 컴포넌트를 재실행
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");

  // 처음 렌더링할 때 대상 코드(콜백함수)를 실행
  // 아무것도 watch하고 있지 않으므로 처음 렌더링시만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // keyword의 state가 변화되어 렌더링할 때 대상 코드(콜백함수) 실행
  // 내부 조건에 맞을 경우만 로그는 찍힘
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
