import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
    },
    {
      id: 2,
      title: "자바스크립트 공부하기",
    },
  ]);

  const [title, setTitle] = useState("");

  const onSubmitHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
    };

    setTodo([...todo, newTodo]);
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="input-group">
          <input
            className="add-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button onClick={onSubmitHandler}>추가하기</button>
        </div>
        <h1 className="subject">Todo List</h1>
        <div className="list-wrapper">
          {todo.map((todo) => {
            return <Card todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="todo-card">
      <p>{props.todo.title}</p>
    </div>
  );
}

export default App;
