import React, { useState } from "react";

export default function TodoList(props) {
  const [filter, setFilter] = useState("all");

  function handleFilterChange(event) {
    setFilter(event.target.value);
    console.log(event.target.value);
  }

  function getFilterData() {
    if (filter == "all") return props.todoData.toReversed();
    else if (filter == "completed")
      return props.todoData.filter((item) => item.completed);
    else if (filter == "incomplete")
      return props.todoData.filter((item) => !item.completed);
  }

  const todoLists = getFilterData().map((todo) => {
    // const todoLists = props.todoData.toReversed().map((todo) => {
    return (
      <li data-id={todo.id} className={todo.completed ? "completed" : ""}>
        <span className="todo-item">{todo.value}</span>
        <svg
          onClick={() => props.deleteTodo(todo.id)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>

        <span
          className="box"
          onClick={() => props.toggleCompleteHandler(todo.id)}
        >
          <span className="stick_1"></span>
          <span className="stick_2"></span>
        </span>
      </li>
    );
  });

  return (
    <>
      <select
        name="filter"
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <div className="list-container">
        <ul>{todoLists.length > 0 ? todoLists : "Kinda Empty😫 :("}</ul>
      </div>
    </>
  );
}
