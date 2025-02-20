import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.due_date}</p>
          <p>Category: {task.category?.name || "No Category"}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
