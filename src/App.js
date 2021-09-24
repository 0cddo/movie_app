import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    // movie array
    movies: []
  };
   
  // async await 사용
  getMovies = async() => {
    // data fetch위해 axios 사용 (fetch 위에 있는 layer? )
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
  }

  componentDidMount() {
    // fetch() -> javascript 에서 data fetch 하는 법
    this.getMovies();
  };

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
