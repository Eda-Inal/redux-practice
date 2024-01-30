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
        const names = name.split(",");

        dispatch(addContact({ id: nanoid(), name }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                <input placeholder='phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form
