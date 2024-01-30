import React from 'react'
import {useSelector} from "react-redux"
import { contactSelector } from '../../redux/contactSlice';
import Item from './Item';
function List() {
    const contatcs = useSelector(contactSelector.selectAll)
  return (
    <ul className='list'>

    {contatcs.map((contact) => 
    <Item key={contact.id}
    item={contact} 
    />)}
    </ul>
  )
}

export default List
