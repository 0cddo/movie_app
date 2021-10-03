import React from "react";

// movie-detail 클래스 생성, 주소창에 "movie-detail" 추가시 state: undefined 해결
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // movie-detil 수동 입력시, home으로 리다이렉팅 시킴
      history.push("/");
    }
  }
  // render -> componentDidMount 실행됨 , location 존재 유무 확인 필요
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
