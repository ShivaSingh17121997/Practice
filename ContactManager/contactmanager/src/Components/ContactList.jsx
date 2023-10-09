import React from 'react'

export default function ContactList(props) {
  const {contact, removeContact} = props

  // console.log(contact,"form contactList")
  const style = {
    border:"0.5px solid black",
    width:"95%",
    textAlign:"left",
    padding:"10px",
    margin:"20px",
    display:"flex",
    justifyContent:"space-between"
    
  }



  const contactList = contact.map((val) => {
    return (
      
      <div >
        <div style={style} >
          <p>Name: {val.data.name}</p>
          <p>Email: {val.data.email}</p>
          <button onClick={()=> removeContact(val.id)} >delete</button>
        </div>
      </div>
    )
  })
  return (
    <div>
      <h2>Contact List</h2>
      <div>{contactList}</div>
    </div>
  )
}
