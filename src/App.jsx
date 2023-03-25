import Header from "./components/Header";
import Weather from "./features/currentWeather/Weather";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Weather defaultCity="Dnipro" />
      </main>
      <Footer />
    </div>
  );
}
