import { func } from "prop-types";
import { useState, useEffect } from "react";

// React.js 의 기본 동작 방식
// : state를 변화시키면 컴포넌트를 재실행

function Hello() {
  // Cleanup 함수?
  // 실제 필드에서 자주 사용하진 않음
  // 아래는 설명 목적의 코딩
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }

  useEffect(hiFn, []);

  /* 실제 코딩 방식
  useEffect(() => {
    console.log("created :)");

    // Cleanup 함수
    return () => console.log("detroyed :<");
  }, []);
  */

  return <h1>Hello</h1>;
}

// {showing ? <Hello /> : null} => <Hello />를 파괴하고(숨김X) 생성하는 효과
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
