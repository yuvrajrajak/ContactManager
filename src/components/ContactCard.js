import React from 'react'
import user from '../images/user.png';

function ContactCard(props) {
  const {id, name, email} = props.contact;
  return (
    <div className='item'>
      <img className='ui avtar image' src={user} alt="user" style={{ width: "50px" }} />
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <i className='trash alternate outline icon' style={{ color: "red", marginTop: "7px" }} onClick={()=>props.clickHandler(id)}></i>
    </div>
  )
}

export default ContactCard