import React, { useState } from "react";
import completeIcon from "../../Images/complete.png";
import deleteIcon from "../../Images/delete.png";
import editIcon from "../../Images/edit.png";
import "./TodoItem.css";

export const TodoItem = ({
  task,
  deleteTask,
  toggleComplete,
  editTask,
  view,
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const toggleEdit = () => {
    if (!editTask) return;
    if (editing) finishEdit();
    else {
      setEditing(true);
      setText(task.text);
    }
  };

  const finishEdit = () => {
    setEditing(false);
    const newText = text.trim();
    if (newText && editTask) editTask(task.id, newText);
  };

  let content = editing ? (
    <input
      className="todo-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={finishEdit}
      onKeyDown={(e) => {
        if (e.key === "Enter") finishEdit();
      }}
      autoFocus
    />
  ) : (
    <span onDoubleClick={toggleEdit}>{task.text}</span>
  );

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {content}
      <div className="todo-actions">
        {view === "todo" && (
          <>
            <button onClick={() => toggleComplete(task.id)}>
              <img src={completeIcon} alt="Complete" />
            </button>
            <button onClick={toggleEdit}>
              <img src={editIcon} alt="Edit" />
            </button>
          </>
        )}
        <button onClick={() => deleteTask(task.id)}>
          <img
            src={deleteIcon}
            alt={view === "deleted" ? "Remove Permanently" : "Delete"}
          />
        </button>
      </div>
    </li>
  );
};
