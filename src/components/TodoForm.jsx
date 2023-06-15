import React, { useState } from "react";

function TodoForm() {
  return (
    <div className="todoForm-container">
      <form className="todoForm" action="">
        <span>제목</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>내용</span>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="btn-add" onClick={addTodoHaneler}>
          추가하기
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
