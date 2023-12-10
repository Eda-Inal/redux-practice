import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from  '../redux/todos/todoSlice'
import {nanoid} from '@reduxjs/toolkit'

function Form() {
    const [title,setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({id :nanoid(),title, completed:false}));
        setTitle("")
    }
  
  return (
    
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?"  value={title}autoFocus
        onChange={(e)=> setTitle(e.target.value)} />
    </form>
 
  )
}

export default Form