import Weather from "./features/currentWeather/Weather";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <main className="container">
        <Weather defaultCity="Dnipro" />
      </main>
      <Footer />
    </div>
  );
}
