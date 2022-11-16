import React from "react";
import "./Body.css";
import SearchEngine from "./SearchEngine";
export default function Body() {
  return (
    <section className="card-body">
      <div className="container">
        <SearchEngine defaultCity="Dnipro" />
      </div>
    </section>
  );
}
