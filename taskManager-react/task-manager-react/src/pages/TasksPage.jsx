import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "../api/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async (taskData) => {
    const newTask = await createTask(taskData);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
