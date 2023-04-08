import React, { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";
import styles from '../Components/homepage.module.css'

export const Homepage = () => {

    const [data, setData] = useState([])
    const [editData, setEditData] = useState(([]))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

    const handleRemove = (id) => {
      var updatedList = data
      updatedList.splice(id, 1)
      setData([...updatedList])

      // let updatedList = data.filter((item) => item.id !== id)
      // console.log(updatedList)
      // setData(updatedList)
    }

    const handleEdit = (id) => {
        const editList = data.find((item) => item.id === id)
        setData(editList.item)
        setEditData(id)
    }

    return (
        <>
          <div className={styles.box}>
            {data.map((item, id) => {
                return <SingleCard handleRemove={handleRemove} id={id} item={item} handleEdit={handleEdit}/>
                
            })}
          </div>
        </>
    )

}