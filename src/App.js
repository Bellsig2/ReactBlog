import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [title, changeTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "아동 코트 추천",
  ]);
  return (
    <div className="App">
      <div style={{ backgroundColor: "black" }} className="blackNav">
        <div className="title" style={{ color: "white", textAlign: "left" }}>
          개발 Blog
        </div>
      </div>
      <div className="writeWrap">
        <div className="goDetail">
          <h3>{title[0]}</h3>
          <p>2월 17일 발행</p>
        </div>
        <div className="goDetail">
          <h3>{title[1]}</h3>
          <p>2월 17일 발행</p>
        </div>
        <div className="goDetail">
          <h3>{title[2]}</h3>
          <p>2월 17일 발행</p>
        </div>
      </div>
    </div>
  );
}

export default App;
