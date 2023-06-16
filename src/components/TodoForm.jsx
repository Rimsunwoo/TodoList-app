import React from "react";

function TodoForm({ addTodoHanedler, onChangeForm, form }) {
  return (
    <div className="todoForm-container">
      <form className="todoForm" onSubmit={addTodoHanedler}>
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
        <button className="btn-add" type="submit">
          추가하기
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
