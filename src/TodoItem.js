import React from "react";

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
