import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import { addContact,addContacts} from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name,setName] = useState('');
    const dispatch =useDispatch();
    const handleSubmit =(e) =>{
e.preventDefault();

setName('');
const names = name.split(",");
const data = names.map((name)=>({id:nanoid(),name}))
dispatch(addContacts(data))

    }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input
        value={name}
        onChange={(e) =>setName(e.target.value)}
        type="text"
        placeholder='name'

         />
      </form>
    </div>
  )
}

export default Form
