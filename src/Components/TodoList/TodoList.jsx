import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css";

export const TodoList = ({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
  view,
}) => {
  return (
    <div className="todo-list-container">
      {tasks.length === 0 ? (
        <div className="empty-message">No tasks to show!</div>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              editTask={editTask}
              view={view}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
