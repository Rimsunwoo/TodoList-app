import React from "react";

function TodoSection({ onFilterTodo }) {
  return (
    <div className="todoSection-container">
      <section className="working-section">
        <h1>할 거..🔥</h1>
        <div className="todoCard-container">{onFilterTodo(false)}</div>
      </section>
      <section className="done-section">
        <h1>한 거..🎉</h1>
        <div className="todoCard-container">{onFilterTodo(true)}</div>
      </section>
    </div>
  );
}

export default TodoSection;
