import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import "./App.css";
import Navigation from "./components/Navigation";
import Detail from "./router/Detail";

function App() {
  return (
    // HashRouter와 BrowserRouter의 차이점 -> HashRouter는 주소창에  /#/ 가 있음
    //HashRouter가 github page에 사용하기 용이함

    <BrowserRouter>
      {/*  Link는 Router 밖에서 쓸 수 없음 
      ex) <footer> 같은 경우 router 밖에서 쓸 수 있음 , 물론 Fragment 필요함 */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* Detail route path값 id 변수 설정 */}
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
