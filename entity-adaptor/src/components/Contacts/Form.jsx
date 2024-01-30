import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import { addContact} from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name,setName] = useState('');
    const dispatch =useDispatch();
    const handleSubmit =(e) =>{
e.preventDefault();

setName('');
const names = name.split(",");

dispatch(addContact({id:nanoid(),name}))

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
