import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toogle,clearCompleted} from '../redux/todos/todoSlice'
import { destroy } from '../redux/todos/todoSlice';


function Todolist() {
  let filtered = []; // böyle olmadığında undefined hatası alıyor
  const dispatch = useDispatch();
const items = useSelector(state => state.todos.items);
const activeFilter = useSelector(state => state.todos.activeFilter);

const handleDestroy = (id) => {
 if( window.confirm("Are you sure")){
   dispatch(destroy(id))

 }
}
filtered = items;
if(activeFilter !== 'all'){
filtered = items.filter((todo) => activeFilter ==='active' ? 
todo.completed==false :
todo.completed==true 

)
}
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
        
       
           {filtered.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
             <div className="view">
             <input className="toggle" 
             checked = {item.completed}
             type="checkbox" onChange={() => dispatch(toogle({id : item.id}))}  />
             <label>{item.title}</label>
             <button className="destroy"
             onClick={() => {handleDestroy(item.id)}}
             ></button>
         </div>
         </li>
        ))}  
       
       
    </ul>
  )
}

export default Todolist
