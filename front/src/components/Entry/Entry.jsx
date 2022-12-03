import Axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Entry.module.css";
import { AiOutlineDelete } from "react-icons/ai";

const Entry = () => {
  const [entryList, setEntryList] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:8080/read`).then((response) => {
      // console.log(response);
      setEntryList(response.data);
    });
  });

  const deleteEntry = (id) => {
    Axios.delete(`http://localhost:8080/delete/${id}`);
  };

  return (
    <>
      {entryList.map((val, key) => {
        return (
          <div className={styles.list} key={key}> 
            <div className={styles.title}>{val.entryTitle}</div>
            <p className={styles.price}>{val.entryPrice}</p>
            <button
              className={styles.button}
              onClick={() => deleteEntry(val._id)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Entry;
