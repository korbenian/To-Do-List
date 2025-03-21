import React from 'react'
import Check from './Check'
import { IoTrash } from 'react-icons/io5'
import '../../App.scss'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <>
      <div className='but-trs'>
        <button className='check' onClick={() => changeTodo(todo.id)}>
          <Check isCompleted={todo.isCompleted} />
          <span className={todo.isCompleted ? 'completed' : ''}>
            {todo.title}
          </span>
        </button>

        <button className='yhw' onClick={() => removeTodo(todo.id)}>
          <IoTrash size={24} className='delete-button' />
        </button>
      </div>
    </>
  )
}

export default TodoItem
