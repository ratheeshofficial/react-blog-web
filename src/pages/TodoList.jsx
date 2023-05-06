import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function TodoList(props) {
  const { todos, onToggle } = props;

  return (
    <ul>
      {todos.map((todo) => {
        console.log("todo", todo);
        return (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""}
            onClick={() => onToggle(todo.id)}
          >
            <Box>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              {todo.title}
            </Box>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
