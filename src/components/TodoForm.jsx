import React from 'react'
import { useState } from 'react';


function TodoForm({addTodo}) {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {

    if (value === '') {
      alert('Please enter a task')
      return
    } else {
      e.preventDefault()

    addTodo(value);

    setValue('')
    }
  }

  return (
    <form action="" onSubmit={handleSubmit} >
      <input type="text" className='todo-input' placeholder='What is the task today?' value={value} onChange={(e) => {setValue(e.target.value);
      }} />

      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
