const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const fetchData = async (endpoint, method = "GET", data = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  return response.json();
};


export const getProjects = () => fetchData("projects");
export const createProject = (data) => fetchData("projects", "POST", data);


export const getCategories = () => fetchData("categories");
export const createCategory = (data) => fetchData("categories", "POST", data);


export const getTasks = (filters) => fetchData("tasks", "GET", filters);
export const createTask = (data) => fetchData("tasks", "POST", data);

