import React from "react";
import styles from "./Home.module.css";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Welcome to FunPay</h1>
        <Link to="/list">
          <button className={styles.btn}>Add your Items</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
