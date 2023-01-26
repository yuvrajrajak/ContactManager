import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header'
import api from '../api/contact'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid'
import ContactDetails from './ContactDetails';
import UpdateContact from './UpdateContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact)
    const request = {
      id: uuidv4(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    console.log(response);
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  const UpdateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    console.log(response)
    const { id, name, email } = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact
    }))
  }



  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retriveContacts) {
    //   setContacts(retriveContacts);
    // }

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts();
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          {/* <AddContact addContactHandler={addContactHandler} />
          <ContactList contacts={contacts} getContactId={removeContactHandler} />
           */}

          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />}></Route>
          <Route path='/' element={<ContactList
            contacts={searchTerm.length < 1 ? contacts : searchResults}
            getContactId={removeContactHandler}
            term={searchTerm}
            searchKeyword={searchHandler}
          />}></Route>
          <Route path='/contact/:id' element={<ContactDetails />}></Route>
          <Route path='/contact/update/:id' element={<UpdateContact UpdateContactHandler={UpdateContactHandler} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
