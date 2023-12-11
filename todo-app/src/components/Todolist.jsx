import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toogle} from '../redux/todos/todoSlice'


function Todolist() {
  const dispatch = useDispatch();
const items = useSelector(state => state.todos.items);
console.log(items);
  return (
    <ul className="todo-list">
        {/* <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
            </div>
        </li> */}
        
       
           {items.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
             <div className="view">
             <input className="toggle" 
             checked = {item.completed}
             type="checkbox" onChange={() => dispatch(toogle({id : item.id}))}  />
             <label>{item.title}</label>
             <button className="destroy"></button>
         </div>
         </li>
        ))}  
       
       
    </ul>
  )
}

export default Todolist
