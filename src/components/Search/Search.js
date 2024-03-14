import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, updatePageNumber }) => {
  return (  
    <form className="d-flex justify-content-center gap-4 mb-4">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for character"
        className={styles.input}
      />
      <button  onClick={e=>{e.preventDefault();}} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
