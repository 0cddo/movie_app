import React from "react";
// Link import -> 리액트를 죽이는 html아님
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      {/* Home 클릭시 다시 새로고침 후 재로딩됨 
      -> html 이기 때문, html 은 페이지를 재로딩함*/}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
