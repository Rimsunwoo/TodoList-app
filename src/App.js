import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoSection from "./components/TodoSection";
import TodoCard from "./components/TodoCard";
function App() {
  if (localStorage.getItem("todoData") == null)
    localStorage.setItem("todoData", JSON.stringify([]));

  const todoData = JSON.parse(localStorage.getItem("todoData"));
  const [todos, setTodos] = useState([...todoData]);
  const [form, setForm] = useState({ title: "", content: "" });

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (form.title.trimStart().trimEnd() === "") alert("제목을 입력해주세요");
    else if (form.content.trimStart().trimEnd() === "")
      alert("내용을 입력해주세요");
    else {
      let todoData = JSON.parse(localStorage.getItem("todoData"));
      let now = new Date();
      todoData.push({
        title: form.title,
        content: form.content,
        done: false,
        id: now.getTime(),
      });
      localStorage.setItem("todoData", JSON.stringify(todoData));
      setTodos(todoData);
    }
  };

  const onChangeForm = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };

  const onFilterTodo = (bool) => {
    return todos
      .filter((todo) => todo.done === bool)
      .map((todo) => {
        return <TodoCard key={todo.id}></TodoCard>;
      });
  };

  const onRemoveTodo = (removeTodo, newTodos) => {
    let todoData = JSON.parse(localStorage.getItem("todoData"));
    let newData = todoData.filter((a) => a.id !== removeTodo.id);
  };

  return (
    <div className="layout-container">
      <Header />
      <TodoForm
        addTodoHaneler={addTodoHandler}
        form={form}
        onChangeForm={onChangeForm}
      />
      <TodoSection
        todos={todos}
        onRemoveTodo={onRemoveTodo}
        onFilterTodo={onFilterTodo}
      />
    </div>
  );
}

export default App;
