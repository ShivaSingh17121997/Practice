import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Axiostutorial() {

  const [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setData(data.data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      <h1></h1>
      {userData.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
          </div>
        )
      })}

    </div>
  )
}
