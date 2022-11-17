import Header from "./Header";
import SearchEngine from "./SearchEngine";
import GitHubLink from "./GitHubLink";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <section className="card-body">
          <div className="container">
            <SearchEngine defaultCity="Dnipro" />
          </div>
        </section>
      </div>
      <GitHubLink />
    </div>
  );
}
