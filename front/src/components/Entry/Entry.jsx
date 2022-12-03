import React from 'react'
import styles from './Entry.module.css'
import { AiOutlineDelete } from "react-icons/ai";

const Entry = () => {
  return (
    <>
      <div className={styles.list}>
        <div className={styles.title}>Item 1</div>
        <p className={styles.price}>999</p>
        <button className={styles.button}>
          <AiOutlineDelete />
        </button>
      </div>
    </>
  );
}

export default Entry