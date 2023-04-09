import React, { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";
import styles from '../Components/homepage.module.css'
import axios from "axios";
import { useParams } from "react-router-dom";

export const Homepage = () => {
    const {id} = useParams
    const [data, setData] = useState([])
    const [editData, setEditData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

    useEffect((id) => {
      axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => res.json())
      .catch(err => console.log(err))
    })

    const handleRemove = (id) => {
      var updatedList = data
      updatedList.splice(id, 1)
      setData([...updatedList])

      // let updatedList = data.filter((item) => item.id !== id)
      // console.log(updatedList)
      // setData(updatedList)
    }
    return (
        <>
          <div className={styles.box}>
            {data.map((item, id) => {
                return <SingleCard handleRemove={handleRemove} id={id} item={item} />        
            })}
          </div>
        </>
    )

}