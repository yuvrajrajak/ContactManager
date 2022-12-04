import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

  const deleteHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactsList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} key={contact.id} clickHandler={deleteHandler} />
    )
  })

  return (
    <div className='ui celled list'>
      {renderContactsList}
    </div>
  )
}

export default ContactList