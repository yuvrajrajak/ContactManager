import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
  const renderContactsList = props.contacts.map((contact,index)=>{
    return(
    <ContactCard contact={contact} key={index}/>
    )
  })
  
  return (
    <div className='ui celled list'>
        {renderContactsList}
    </div>
  )
}

export default ContactList