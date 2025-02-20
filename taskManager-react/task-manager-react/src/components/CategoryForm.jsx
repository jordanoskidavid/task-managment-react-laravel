import React, { useState } from "react";

const CategoryForm = ({ onCreateCategory }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCategory({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CategoryForm;
