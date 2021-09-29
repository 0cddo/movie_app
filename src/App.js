import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    // movie array
    movies: [],
  };

  // async await 사용
  getMovies = async () => {
    // ?sort_by=rating -> Endpoint Parameters , rating으로 데이터 정렬(best movie 순)
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
