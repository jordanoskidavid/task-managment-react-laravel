import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
