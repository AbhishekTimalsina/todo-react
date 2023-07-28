import React, { useState } from "react";

export default function TodoForm(props) {
  const [todo, setTodo] = useState({
    value: "",
    completed: false,
    id: Math.random(),
  });

  function handleInput(e) {
    setTodo((prev) => {
      return { ...prev, value: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.value.trim() == "") return;
    props.updateToDoData(todo);
    setTodo({ value: "", completed: false, id: Math.random() });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="todo"
        placeholder="Add todo"
        value={todo.value}
        onChange={handleInput}
      />
      <button>Add</button>
    </form>
  );
}
