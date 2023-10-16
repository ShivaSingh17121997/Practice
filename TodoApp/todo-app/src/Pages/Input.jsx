import React from 'react'
import { useState } from 'react';

export default function Input({ AddTask }) {
    const [taskData, setTaskData] = useState({ task: "", name: "" })
    console.log(taskData)

    const style = {
        padding: "20px",
        width: "40%"
    }

    const handleInput = (e) => {
        if (e.target.name === "task") {
            setTaskData({ ...taskData, task: e.target.value })
        } else {
            setTaskData({ ...taskData, name: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskData.task === "" || taskData.name === "") {
            alert("Please fill the details")
        }
        AddTask(taskData)
        setTaskData({ task: "", name: "" })

    }


    return (
        <div>
            <input style={style} name="task" value={taskData.task} onChange={handleInput} placeholder='Task' type="text" /> <br /> <br />
            <input style={style} type="text" name="name" value={taskData.name} onChange={handleInput} placeholder='Enter name' />
            {/*  <select style={style} value={select} onChange={(e) => setSelect(e.target.value)} >
                <option value="">Status</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select> <br /> <br /> */}<br /> <br />
            <button style={{ padding: "15px", width: "100px" }} onClick={handleSubmit} >Submit</button>
        </div>
    )
}
