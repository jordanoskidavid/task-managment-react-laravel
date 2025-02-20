import React, { useEffect, useState } from "react";
import { getCategories, createCategory } from "../api/api";
import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCreateCategory = async (categoryData) => {
    const newCategory = await createCategory(categoryData);
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <div>
      <h1>Categories</h1>
      <CategoryForm onCreateCategory={handleCreateCategory} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoriesPage;
