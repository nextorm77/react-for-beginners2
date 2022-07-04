import { func } from "prop-types";
import { useState, useEffect } from "react";

/*
form 안의 button 기본 동작은 refresh(마치 submit한 것 처럼)
기본 동작을 막기 위해 ~.preventDefault()
*/
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    // toDos.push; // 직접 state 접근 불가능
    //console.log(toDos);
  };
  console.log(toDos);

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
    </div>
  );
}

export default App;
