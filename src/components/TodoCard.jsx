import React from "react";

function TodoCard({ todo, onRemoveTodo, onModifyTodo }) {
  return (
    <div className="card-container">
      <h3>{todo.title}</h3>
      <h4>{todo.content}</h4>
      <div className="button-container">
        <button className="btn-red" onClick={() => onRemoveTodo(todo.id)}>
          삭제하기
        </button>
        <button className="btn-green" onClick={() => onModifyTodo(todo.id)}>
          {todo.done === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
