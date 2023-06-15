import React, { useState } from "react";
import TodoCard from "./TodoCard";
function TodoSection({ section }) {
  let [working, setWorking] = useState([]);
  let [done, setDone] = useState([]);
  return (
    <div className="todoSection-container">
      <section className="working-section">
        <h1>할 거..🔥</h1>
        <div className="todoCard-container">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </section>
      <section className="done-section">
        <h1>한 거..🎉</h1>
        <div className="todoCard-container">
          <TodoCard></TodoCard>
        </div>
      </section>
    </div>
  );
}

export default TodoSection;
