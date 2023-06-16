import React from "react";

function TodoForm({ addTodoHandler, onChangeForm, form }) {
  return (
    <div className="todoForm-container">
      <form className="todoForm">
        <span>제목</span>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={onChangeForm}
        />
        <span>내용</span>
        <input
          type="text"
          name="content"
          value={form.content}
          onChange={onChangeForm}
        />
        <button className="btn-add" type="button" onClick={addTodoHandler}>
          추가하기
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
