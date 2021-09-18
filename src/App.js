import { current } from 'immer';
import React from 'react'
// import PropTypes from "prop-types";

class App extends React.Component {

  // state에는 변할 데이터 값 입력
  state = {
    count: 0
  };

  // setState 사용 이유: 새 state와 함께 render function 호출하기 위해
  plus = () => {
    // this.state.count -> 좋은 코드 아님, 외부에서 코드를 불러오기 때문에
    this.setState( current => ({count: current.count + 1}))
  }
  minus = () => {
    this.setState( current => ({count: current.count -1}))
  }

  
  componentDidMount(){
    console.log('component rended')
  }

  // component가 업데이트될때마다 렌더함수와 함께 렌더링
  componentDidUpdate(){
    console.log('i just updated')
  }

  // kill component 
  componentWillUnmount(){
    console.log('good bye!')
  }

  render() {
    console.log('im rendering')
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
