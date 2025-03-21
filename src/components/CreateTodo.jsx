import React, { useState } from 'react'
import '../App.scss'

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  return (
    <div className='dodo'>
      <input
        className='input'
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e => e.key === 'Enter' && addTodo(title)}
      ></input>
    </div>
  )
}

export default CreateTodo
