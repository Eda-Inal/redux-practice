import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addTodoAsync} from  '../redux/todos/todoSlice'
import Loading from './Loading'


function Form() {
    const [title,setTitle] = useState('');
    const dispatch = useDispatch();
    const error= useSelector((state) =>state.todos.addNewTodoError)
    const isLoading = useSelector(state=> state.todos.addNewTodoIsLoading );
    const handleSubmit = async(e) => {
        e.preventDefault();
       await dispatch(addTodoAsync({title}));
        setTitle("");
    }
    if(error) {
alert(error);
return;
    }
  
  return (
    
      <form style={{display:'flex', alignItems:'center'}} onSubmit={handleSubmit}>
        <input disabled={isLoading} className="new-todo" placeholder="What needs to be done?"  value={title}autoFocus
        onChange={(e)=> setTitle(e.target.value)} />
        {
          isLoading &&
          <Loading/>
        }
        
    </form>
 
  )
}

export default Form
