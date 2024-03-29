import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        
        setNumber('');

        dispatch(addContact({ id: nanoid(), name,phone_number:number }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                <input placeholder='phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <div className="btn"><button type='submit'>Add</button></div>
            </form>
        </div>
    )
}

export default Form
