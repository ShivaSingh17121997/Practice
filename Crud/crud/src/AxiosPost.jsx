import axios from 'axios'
import React, { useState } from 'react'

export default function AxiosPost() {
    const data = {firstName:"", lastName:""}

    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((res)=>console.log(res))
    }

    const handleUpdate = (e) => {
      e.preventDefault()

      axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
      .then((res)=>console.log(res))

    }

    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then((res)=> console.log(res))

    }
  return (
    <div>
        <input type="text" name="firstName" placeholder='firstname' onChange={handleData} value={inputData.firstName}  /><br/>
        <input type="text" name="lastName" placeholder='lastname' onChange={handleData} value={inputData.lastName}  /> <br/>
        <button onClick={handleSubmit} >Submit</button>
        <button onClick={handleUpdate} >Update</button>
        <button onClick={handleDelete} >Delete</button>
    </div>
  )
}
