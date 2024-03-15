import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Valorant", "Dragon Ball"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category, index) => {
        return <GifGrid key={index} category={category} />;
      })}
    </>
  );
};
