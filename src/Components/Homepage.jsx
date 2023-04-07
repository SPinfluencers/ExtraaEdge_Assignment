import React, { useEffect, useState } from "react";

export const Homepage = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

    return (
        <>
          <div>
            {data && data.map((item) => {
                return <p key={item.id}>{item.name}</p>
            })}
          </div>
        </>
    )

}