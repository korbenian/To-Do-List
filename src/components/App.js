import '../App.scss'
import React, { useState } from 'react'
import TodoItem from './item/Todo.jsx'
import data from './item/elements'
import CreateTodo from './CreateTodo'
function Home () {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }
  const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        title,
        isCompleted: false
      }
    ])
  }
  window.addTodo = addTodo
  return (
    <div className='container'>
      <h1 className='to-do'> To-Do List</h1>
      <div className='components'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <CreateTodo addTodo={addTodo} />
      </div>
    </div>
  )
}

export default Home
