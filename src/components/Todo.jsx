import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task, toggleComplete, deleteTodo}) {
  return (
    <div className='todo'>
      <p onClick={() => toggleComplete(task.id)} className={ `${ task.completed ? 'completed': '' }` }>{ task.task }</p>

      <div className='todo-icons'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {editTodo(task.id)}} />
        <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo