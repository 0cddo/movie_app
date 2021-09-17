import React from 'react'
// import PropTypes from "prop-types";

class App extends React.Component {
  // state에는 변할 데이터 값 입력
  state = {
    count: 0
  };
  plus = () => {
    console.log('plus')
  }
  minus = () => {
    console.log('minus')
  }

  render() {
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
