import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteContacts } from '../../redux/contactSlice';
function Item({item}) {
    const dispatch = useDispatch();
    const handleDelete  =(id) => {
        if(window.confirm("are you sure")){
            dispatch(deleteContacts(id))
        }
    }
  return (
    <li>
        <span> {item.name}</span>
        <span> {item.phone_number}</span>
        <span className='deleteBtn'onClick={()=>handleDelete(item.id)}>X</span>
      
    </li>
  )
}

export default Item
