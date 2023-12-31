import { useRootContext } from "@/context/context";
import React from "react";

const Search = () => {
  const { openSearch, toggleSearch } = useRootContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <div className={`search-popup${openSearch ? " active" : ""}`}>
      <div
        onClick={toggleSearch}
        className="search-popup__overlay search-toggler"
      ></div>
      <div className="search-popup__content">
        <form onSubmit={handleSearch}>
          <label htmlFor="search" className="sr-only">
            procura aqui
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Procurar..."
          />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
