import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addTodoAsync} from  '../redux/todos/todoSlice'


function Form() {
    const [title,setTitle] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(state=> state.todos.addNewTodoIsLoading );
    const handleSubmit = async(e) => {
        e.preventDefault();
       await dispatch(addTodoAsync({title}));
        setTitle("");
    }
  
  return (
    
      <form style={{display:'flex', alignItems:'center'}} onSubmit={handleSubmit}>
        <input disabled={isLoading} className="new-todo" placeholder="What needs to be done?"  value={title}autoFocus
        onChange={(e)=> setTitle(e.target.value)} />
        {
          isLoading &&
          <span style={{paddingRight :10}}>Loading...</span>
        }
        
    </form>
 
  )
}

export default Form
