import React from 'react'

export default function Input() {

    const style = {
        padding: "20px",
        width: "40%"
    }


    const handleSubmit = (e) => {
        e.preventDefault();


    }

    const handleSelect = () => {

    }
    return (
        <div>
            <input style={style} value="Task" onChange={(e)=> e.target.value } placeholder='Task' type="text" /> <br /> <br />
            <select style={style} onChange={handleSelect} >
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select> <br /> <br />
            <button style={{ padding: "15px", width: "100px" }} onSubmit={handleSubmit} >Submit</button>
        </div>
    )
}
