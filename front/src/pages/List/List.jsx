import React from "react";
import styles from "./List.module.css";
import Search from "../../components/Search/Search";
import Entry from "../../components/Entry/Entry";
const List = () => {
  return (
    <>
      <Search />
      <div className={styles.container}>
        <h1 className={styles.header}>Here's your list</h1>
        <Entry/>
      </div>
    </>
  );
};

export default List;
