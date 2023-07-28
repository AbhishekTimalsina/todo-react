import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

const App = function () {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  useEffect(
    function setLocalStorage() {
      localStorage.setItem("todoData", JSON.stringify(todoData));
    },
    [todoData]
  );

  function addTodo(todo) {
    setTodoData((prev) => {
      let newList = [...prev];
      newList.push(todo);
      return newList;
    });
  }

  function toggleCompletedData(id) {
    setTodoData((prev) => {
      const todo = prev.map((item) => {
        if (item.id == id) {
          return { ...item, completed: !item.completed };
        }
        return { ...item };
      });
      console.log(todo);
      return todo;
    });
  }

  function deleteTodo(id) {
    setTodoData((prev) => prev.filter((item) => item.id != id));
  }

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-container">
          <div className="input-container">
            <TodoForm updateToDoData={addTodo} />
          </div>

          <TodoList
            todoData={todoData}
            toggleCompleteHandler={toggleCompletedData}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};
export default App;
