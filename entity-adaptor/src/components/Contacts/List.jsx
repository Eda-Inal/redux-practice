import React from 'react'
import {useSelector} from "react-redux"
import { contactSelector } from '../../redux/contactSlice';
import Item from './Item';
function List() {
    const contatcs = useSelector(contactSelector.selectAll)
  return (
    <div>

    {contatcs.map((contact) => 
    <Item key={contact.id}
    item={contact} 
    />)}
    </div>
  )
}

export default List
