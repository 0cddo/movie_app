function Food({ fav }) {
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="떡볶이"/>
      <Food fav="김치볶음밥"/>
    </div>
  );
}

export default App;
