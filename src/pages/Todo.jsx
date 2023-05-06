import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  console.log("todos", todos);

  const [checked, setCheckedList] = useState([]);

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    console.log("id", id);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default TodoApp;
