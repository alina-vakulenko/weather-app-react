import React from "react";

import style from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit, changeCity }) {
  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="search"
        placeholder="Enter city name"
        autoFocus="on"
        onChange={changeCity}
      />
      <div>
        <button className={style.btn} title="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}
