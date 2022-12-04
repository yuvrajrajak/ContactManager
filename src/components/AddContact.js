import React, { useState } from 'react'

function AddContact(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let contact = {}
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "") {
            alert("All Field is mandatory")
            return
        }
        contact = {
            ...contact,
            name: name,
            email: email
        }
        props.addContactHandler(contact);
        setName('');
        setEmail('');
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
                <button type='submit' className='ui button blue'>Add</button>
            </form>
        </div>
    )
}

export default AddContact