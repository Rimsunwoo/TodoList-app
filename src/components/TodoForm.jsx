import React, { useState } from "react";

function TodoForm({ setTodos }) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const addTodoHaneler = (e) => {
    e.preventDefault();
    if (title.trimStart().trimEnd() === "") alert("제목을 입력해주세요");
    else if (content.trimStart().trimEnd() === "") alert("내용을 입력해주세요");
    else {
      let todoData = JSON.parse(localStorage.getItem("todoData"));
      let now = new Date();
      todoData.push({ title, content, done: 0, id: now.getTime() });
      localStorage.setItem("todoData", JSON.stringify(todoData));
      setTodos(todoData);
      setTitle("");
      setContent("");
    }
  };
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
