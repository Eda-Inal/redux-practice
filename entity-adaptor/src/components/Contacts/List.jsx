import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { contactSelector,removeAllContacts } from '../../redux/contactSlice';
import Item from './Item';
function List() {
    const contatcs = useSelector(contactSelector.selectAll);
    const dispatch = useDispatch();
    const handleDeleteAll=()=> {
        dispatch(removeAllContacts())
    }
  return (
    <div>
        <div className='removeAllBtn' onClick={handleDeleteAll}>Delete All</div>
    <ul className='list'>

    {contatcs.map((contact) => 
    <Item key={contact.id}
    item={contact} 
    />)}
    </ul>
   </div>

  )
}

export default List
