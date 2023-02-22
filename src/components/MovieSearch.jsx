import React from "react";
import { FaSearch } from "react-icons/fa";

export const MovieSearch = ({ handleSubmit, search, handleChange }) => {
  return (
    <form className="movie-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name movie..."
        value={search}
        onChange={handleChange}
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};
