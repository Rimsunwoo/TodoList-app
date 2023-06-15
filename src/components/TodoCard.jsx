import React from "react";

function TodoCard({ todo, setTodos }) {
  let btnTxt = todo.done === 0 ? "완료" : "취소";
  const removeTodo = () => {
    let todoData = JSON.parse(localStorage.getItem("todoData"));
    let newData = todoData.filter((a) => a.id !== todo.id);
    setTodos(newData);
    localStorage.setItem("todoData", JSON.stringify(newData));
  };
  return (
    <div className="card-container">
      <h3>{todo.title}</h3>
      <h4>{todo.content}</h4>
      <div className="button-container">
        <button className="btn-red" onClick={removeTodo}>
          삭제하기
        </button>
        <button className="btn-green">{btnTxt}</button>
      </div>
    </div>
  );
}

export default TodoCard;
