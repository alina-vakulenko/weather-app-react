import React from "react";
import "./GitHubLink.css";

export default function GitHubLink() {
  return (
    <footer className="GitHubLink">
      This project was coded by Alina Vakulenko{" "}
      <br className="d-block d-xl-none" />
      and is{" "}
      <a
        href="https://github.com/alina-vakulenko/weather-react"
        title="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://bright-pony-d65684.netlify.app/"
        title="Netlify"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
