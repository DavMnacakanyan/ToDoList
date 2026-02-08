import { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import "./TodoApp.css";
import "../../App/App.css";

export const TodoApp = ({ view }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setTasks(tasks.filter((t) => t.id !== id));
    setCompletedTasks([...completedTasks, { ...task, completed: true }]);
  };

  const deleteTask = (id) => {
    if (view === "deleted") {
      setDeletedTasks(deletedTasks.filter((t) => t.id !== id));
      return;
    }

    let task =
      tasks.find((t) => t.id === id) || completedTasks.find((t) => t.id === id);
    if (!task) return;

    setTasks(tasks.filter((t) => t.id !== id));
    setCompletedTasks(completedTasks.filter((t) => t.id !== id));
    setDeletedTasks([...deletedTasks, task]);
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  let displayTasks = [];
  if (view === "todo") displayTasks = tasks;
  else if (view === "completed") displayTasks = completedTasks;
  else if (view === "deleted") displayTasks = deletedTasks;

  return (
    <div className="todoContainer">
      <h1>
        {view === "todo" && "My Tasks"}
        {view === "completed" && "Completed Tasks"}
        {view === "deleted" && "Deleted Tasks"}
      </h1>
      {view === "todo" && <TodoForm addTask={addTask} />}
      <TodoList
        tasks={displayTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={view === "todo" ? editTask : undefined}
        view={view}
      />
    </div>
  );
};
