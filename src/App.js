import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoSection from "./components/TodoSection";
import TodoCard from "./components/TodoCard";
function App() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todoData")) ?? []
  );
  const [form, setForm] = useState({ title: "", content: "" });

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") alert("제목을 입력해주세요");
    else if (form.content.trim() === "") alert("내용을 입력해주세요");
    else {
      const newData = {
        title: form.title,
        content: form.content,
        done: false,
        id: Date.now(),
      };
      setTodoData([...todoData, newData]);
      localStorage.setItem("todoData", JSON.stringify([...todoData, newData]));
      setForm({ title: "", content: "" });
    }
  };

  // input change
  const onChangeForm = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };

  // section commponent filter(todo, done)
  const onFilterTodo = (bool) => {
    return todoData
      .filter((todo) => todo.done === bool)
      .map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            onModifyTodo={onModifyTodo}
            todo={todo}
          ></TodoCard>
        );
      });
  };

  // remove Todo
  const onRemoveTodo = (romoveTarget) => {
    let newData = todoData.filter((a) => a.id !== romoveTarget);
    setTodoData(newData);
    localStorage.setItem("todoData", JSON.stringify(newData));
  };

  // Modify Todo (todo <=> done)
  const onModifyTodo = (modifyTarget) => {
    let newData = todoData.map((todo) => {
      if (todo.id === modifyTarget) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodoData(newData);
    localStorage.setItem("todoData", JSON.stringify(newData));
  };

  return (
    <div className="layout-container">
      <Header />
      <TodoForm
        addTodoHandler={addTodoHandler}
        form={form}
        onChangeForm={onChangeForm}
      />
      <TodoSection onFilterTodo={onFilterTodo} />
    </div>
  );
}

export default App;
