import React from "react";

export default function Footer() {
  return (
    <footer className="source-link">
      This project is{" "}
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
