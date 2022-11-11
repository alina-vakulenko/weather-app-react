import "./App.css";
import Header from "./Header";
import Body from "./Body";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <Body />
      </div>
      <GitHubLink />
    </div>
  );
}
