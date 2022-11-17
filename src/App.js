import Header from "./Header";
import SearchWeather from "./SearchWeather";
import GitHubLink from "./GitHubLink";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchWeather defaultCity="Dnipro" />
      </div>
      <GitHubLink />
    </div>
  );
}
