import React, { useState } from "react";

function TodoCard({ todo }) {
  console.log(todo);
  return (
    <div className="card-container">
      <h3>{todo.title}</h3>
      <h4>{todo.content}</h4>
      <div className="button-container">
        <button className="btn-red">삭제하기</button>
        <button className="btn-green">완료</button>
      </div>
    </div>
  );
}

export default TodoCard;
