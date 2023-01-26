import React from 'react'
import user from '../images/user.png'
import { Link, useLocation } from 'react-router-dom'

function ContactDetails(props) {
    const location = useLocation()
    const { contact } = location.state
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div className='description'>{contact.email}</div>
                </div>
            </div>
            <div className="center-div center">
                <Link to='/'>
                    <button className="ui button blue centered">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetails