import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
