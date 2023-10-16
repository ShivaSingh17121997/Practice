import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './Components/ContactList';
import Form from './Components/Form';
import Header from './Components/Header';


function App() {
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("contact")) || []
  })

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact))
  }, [contact])


  const addContact = (data) => {
    setContact([...contact, { id: Math.random(), data }])
    console.log(data)
  }

  const removeContact = (id) => {

    const updatedList = contact.filter((val) => {
      return val.id !== id;
    })
    setContact(updatedList)
  }

  return (
    <div className="App">
      <Header />
      <Form addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
