import React from "react";
import styles from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <>
      <div className={styles.search_body}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.search_box}
            placeholder="Enter your Item"
          />
          <button type="submit" className={styles.search_btn}>
            <BiSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
