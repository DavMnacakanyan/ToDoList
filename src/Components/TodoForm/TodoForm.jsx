import { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  }

  return (
    <form onSubmit={submit}>
      <input
        className="formInput"
        value={text}
        placeholder="Enter text..."
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <button>Add Task</button>
    </form>
  );
};
