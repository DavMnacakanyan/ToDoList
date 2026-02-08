import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { TodoApp } from "../Components/TodoApp/TodoApp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoApp view="todo" />} />
        <Route path="completed" element={<TodoApp view="completed" />} />
        <Route path="deleted" element={<TodoApp view="deleted" />} />
      </Route>
    </Routes>
  );
};
