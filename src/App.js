import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";

function App() {
  return (
    <BrowserRouter>
      {/* 2개의 컴포넌트가 동시에 렌더링 방지를 위해 exact={true} 사용
      해당 url의 오직 단하나만 렌더링함 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />

      {/* 컴포넌트 동시 렌더링 방지 */}
      {/* home과 introduction은 두개 동시에 렌더링됨  
        -> url이 작동하는 방식 , 리액트 라우터는 기본적으로 url 을 가져옴 그리고 비교함 */}
      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </BrowserRouter>
  );
}

export default App;
