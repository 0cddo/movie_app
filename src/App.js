// import { current } from 'immer';
import React from 'react'

class App extends React.Component {
  state = {
    isLoading: true,
    // movie array
    movies: []
  }
  // 시작: component mount됨 (5초 뒤에 실행)
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false, book: true});
    }, 5000)
  }

  render() { 
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready!"}
      </div>
    )
  }
}


export default App;
