import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

import TodoSection from "./components/TodoSection";
function App() {
  if (localStorage.getItem("todoData") == null)
    localStorage.setItem("todoData", JSON.stringify([]));

  let todoData = JSON.parse(localStorage.getItem("todoData"));
  let [todos, setTodos] = useState([...todoData]);

  return (
    <div className="layout-container">
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoSection todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
