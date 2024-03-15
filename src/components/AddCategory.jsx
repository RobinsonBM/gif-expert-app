import { useState } from "react";

// export const AddCategory = ({ setCategories }) => {
  export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const newCategory = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onAddCategory(inputValue)
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={newCategory}
      />
    </form>
  );
};
