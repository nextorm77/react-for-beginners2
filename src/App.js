import { func } from "prop-types";
import { useState, useEffect } from "react";

/*
form 안의 button 기본 동작은 refresh(마치 submit한 것 처럼)
기본 동작을 막기 위해 ~.preventDefault()
*/
function App() {
  const [toDo, setToDo] = useState(""); // 초기값으로 state 타입 결정?
  const [toDos, setToDos] = useState([]); // 초기값으로 state 타입 결정?
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // toDos.push; // 직접 state 변경 불가능
    setToDos((currentArray) => [toDo, ...currentArray]); // 함수로 state 변경
    //console.log(toDos);
    setToDo(""); // 값으로 state 변경
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
