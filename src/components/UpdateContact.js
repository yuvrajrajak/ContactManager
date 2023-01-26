import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function UpdateContact(props) {
    let navigate = useNavigate();
    let location = useLocation();

    const [name, setName] = useState(location.state.contact.name)
    const [email, setEmail] = useState(location.state.contact.email)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "") {
            alert("All Field is mandatory")
            return
        }
        let contact = {
            id: location.state.contact.id,
            name: name,
            email: email
        }
        props.UpdateContactHandler(contact);
        setName('');
        setEmail('');
        navigate('/')
    }

    return (
        <div>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Name:</label>
                    <input type="text" name='name' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className='field'>
                    <label>Email:</label>
                    <input type="text" name='email' placeholder='Email' value={email} onChange={(event) => { return setEmail(event.target.value) }} />
                </div>
                <button type='submit' className='ui button blue'>Update</button>
            </form>
        </div>
    )
}

export default UpdateContact