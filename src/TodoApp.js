import React from "react";

import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import FilterRow from "./components/FilterRow";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoItems />
      <FilterRow />
    </div>
  );
}
