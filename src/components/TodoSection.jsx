import React from "react";
import TodoCard from "./TodoCard";
function TodoSection({ todos, setTodos }) {
  return (
    <div className="todoSection-container">
      <section className="working-section">
        <h1>할 거..🔥</h1>
        <div className="todoCard-container">
          {todos
            .filter((todo) => todo.done === false)
            .map((todo, i) => {
              return <TodoCard key={i} todo={todo} setTodos={setTodos} />;
            })}
        </div>
      </section>
      <section className="done-section">
        <h1>한 거..🎉</h1>
        <div className="todoCard-container">
          {todos
            .filter((todo) => todo.done === true)
            .map((todo, i) => {
              return <TodoCard key={i} todo={todo} setTodos={setTodos} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default TodoSection;
