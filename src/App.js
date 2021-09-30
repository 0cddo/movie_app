import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// 코드 cloud 업로드 -> gh-pages 설치
// 웹사이트를 github의 github page 도메인에 나타나게 해줌

class App extends React.Component {
  state = {
    isLoading: true,
    // movie array
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // fetch() -> javascript 에서 data fetch 하는 법
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      // css를 위한 Html
      <section className="container">
        <div>
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                //  return 없음
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default App;
