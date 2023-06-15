import React from "react";

function TodoForm() {
  return (
    <div className="todoForm-container">
      <form className="todoForm" action="">
        <span>제목</span>
        <input type="text" />
        <span>내용</span>
        <input type="text" />
        <button className="btn-add">추가하기</button>
      </form>
    </div>
  );
}

export default TodoForm;
