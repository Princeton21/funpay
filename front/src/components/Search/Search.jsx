import Axios from "axios";
import React, { useState } from "react";
import styles from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const addEntry = () => {
    Axios.post("http://127.0.0.1:8080/insert", {
      title: title,
      price: price,
    });
  };
  return (
    <>
      <div className={styles.search_body}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.search_box}
            placeholder="Enter your Item"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            className={styles.search_price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={addEntry} className={styles.search_btn}>
            <BiSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
