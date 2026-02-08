import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={submit} className="todo-form">
      <input
        type="text"
        className="form-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
};
