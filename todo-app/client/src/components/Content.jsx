import React from 'react'
import TodoList from './Todolist'
import ContentFooter from './ContentFooter'

function Content() {
  return (
    <section className="main">
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">
        Mark all as complete
    </label>
<TodoList/>
    <ContentFooter/>
</section>
  )
}

export default Content
