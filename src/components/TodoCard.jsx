import React from "react";

function TodoCard({ todo, setTodos }) {
  let btnTxt = todo.done === false ? "완료" : "취소";
  let todoData = JSON.parse(localStorage.getItem("todoData"));
  const removeTodo = () => {
    let newData = todoData.filter((a) => a.id !== todo.id);
    setTodos(newData);
    localStorage.setItem("todoData", JSON.stringify(newData));
  };
  /////
  const modifyTodo = () => {
    let i = 0;
    let newData = todoData.map((a) => {
      if (a.id === todo.id) {
        let status = a.done === false ? true : false;
        i = todoData.indexOf(a);
        a.done = status;
      }
      return a;
    });
    let b = newData[i];
    newData.splice(i, 1, b);
    console.log(newData);
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
        <button className="btn-green" onClick={modifyTodo}>
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
