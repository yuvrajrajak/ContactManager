import React, { useRef } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

function ContactList(props) {
  const InputEl = useRef('')
  const deleteHandler = (id) => {
    props.getContactId(id);
  }

  const getSearchTerm = () => {
    props.searchKeyword(InputEl.current.value)
  }

  const renderContactsList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} key={contact.id} clickHandler={deleteHandler} />
    )
  })

  return (
    <div className='main'>
      <h2 className="contact-list">
        Contact List
        <Link to='/add'><button className='ui button blue right'>Add Contacts</button></Link>
      </h2>
      <div className='ui search'>
        <input
          ref={InputEl}
          type='text'
          placeholder='Search Contacts'
          className='prompt'
          value={props.term}
          onChange={getSearchTerm}
        />
      </div>
      <div className='ui celled list'>
        {renderContactsList.length > 0 ? renderContactsList : "No Contacts Available"}
      </div>
    </div>
  )
}

export default ContactList