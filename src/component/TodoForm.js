import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = React.useState("");
  const style = {
    background: "rgb(240, 240, 240)",
    color: "black",
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    addTodo({
      id,
      title,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={onTitleChange}
        placeholder="Enter a new todo.."
        value={title}
        required
      />
      <input type="submit" style={style} value="Add" />
    </form>
  );
};

export default TodoForm;
