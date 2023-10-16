import React, { useState } from 'react'

export default function Form({ addContact }) {

    const [contactData, setContactData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setContactData({ ...contactData, name: e.target.value })
        } else {
            setContactData({ ...contactData, email: e.target.value })
        }
    }

    const handleAdd = () => {
        if (contactData.name === "" || contactData.email === "") {
            alert("Please fill all the details")
        }
        addContact(contactData)
        setContactData({ name: "", email: "" })
    }

    return (
        <div>
            <h2>Add Contacts</h2>
            <form action="">
                <input style={{ padding: "20px", width: "30%" }} type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} />  <br /> <br />
                <input style={{ padding: "20px", width: "30%" }} type="text" placeholder='Enter Email' name="email" value={contactData.email} onChange={handleChange} />
            </form>
            <button style={{ margin: "20px", padding: "15px", fontSize: "20px" }}
                onClick={handleAdd} >Add Contact</button>
        </div>
    )
}



// form control 

// function Form() {
//     const [contactData, setContactData] = useState({ name: "", email: "" })

//     const handleChange = (e) => {
//         if (e.target.name === "name") {
//             setContactData({ ...contactData, name: e.target.value })
//         } else {
//             setContactData({ ...contactData, email: e.target.value })
//         }

//     }

//     const handleSubmit = () => {
//         if(contactData.name === "" || contactData.email === ""){
//             alert("Please fill the details")
//         } else {

//         }
//     }

//     console.log(contactData)
//     return (
//         <div>
//             <input type="text" onChange={handleChange} name="name" value={contactData.name} />  <br /> <br />
//             <input type="text" onChange={handleChange} name="email" value={contactData.email} />    <br /> <br />
//             <button onClick={handleSubmit} >Submit</button>
//         </div>
//     )
// }
// export default Form;