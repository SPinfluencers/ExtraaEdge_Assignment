import React, { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";
import styles from "../Components/homepage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleEdit = ({ id, modifiedData }) => {
    let newData = data.map((e) => {
      if (e.id === id) {
        //add the modified data to element
        e = { id, ...modifiedData };
      }
      return e;
    });
    console.log("newData", newData);
    //
    setData([...newData]);
  };

  const handleRemove = (id) => {
    var updatedList = data;
    updatedList.splice(id, 1);
    setData([...updatedList]);

    // let updatedList = data.filter((item) => item.id !== id)
    // console.log(updatedList)
    // setData(updatedList)
  };
  return (
    <>
      <div className={styles.box}>
        {data.map((item, id) => {
          return (
            <SingleCard
              handleRemove={handleRemove}
              handleEdit={handleEdit}
              id={id}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};
