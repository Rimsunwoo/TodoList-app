import React from "react";
import TodoCard from "./TodoCard";
function TodoSection({ todos }) {
  return (
    <div className="todoSection-container">
      <section className="working-section">
        <h1>할 거..🔥</h1>
        <div className="todoCard-container">
          {todos
            .filter((todo) => todo.done == 0)
            .map((todo, i) => {
              return <TodoCard key={i} todo={todo} />;
            })}
        </div>
      </section>
      <section className="done-section">
        <h1>한 거..🎉</h1>
        <div className="todoCard-container">
          {todos
            .filter((todo) => todo.done == 1)
            .map((todo, i) => {
              return <TodoCard key={i} todo={todo} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default TodoSection;
