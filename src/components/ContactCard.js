import React from 'react'
import { Link } from 'react-router-dom';
import user from '../images/user.png';
import './App.css'

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className='item'>
      <img className='ui avtar image' src={user} alt="user" style={{ width: "50px" }} />
      <Link to={`/contact/${id}`} state={{ contact: props.contact }} >
        <div className='content'>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </div>
      </Link>

      <i className='trash alternate outline icon' onClick={() => props.clickHandler(id)} style={{ color: "red", marginTop: "7px" }} ></i>
      <Link to={`/contact/update/${id}`} state={{ contact: props.contact }}>
        <i
          className='edit alternate outline icon'
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>

    </div >
  )
}

export default ContactCard