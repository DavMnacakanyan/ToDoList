import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css"
export const TodoList = ({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
  view,
}) => {
  return (
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
  );
};
