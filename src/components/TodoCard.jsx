import React from "react";

function TodoCard() {
  return (
    <div className="card-container">
      <h3>더미 데이터 제목</h3>
      <h4>더미 데이터 내용</h4>
      <div className="button-container">
        <button className="btn-red">삭제하기</button>
        <button className="btn-green">완료</button>
      </div>
    </div>
  );
}

export default TodoCard;
