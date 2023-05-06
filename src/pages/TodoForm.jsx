import React, { useState } from "react";

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    props.onSubmit({
      id: Date.now(),
      title: newTodo,
      completed: false,
    });

    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
