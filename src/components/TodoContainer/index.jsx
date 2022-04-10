import React, { useState } from 'react'
import TodoAdder from '../TodoAdder'
import TodoHeader from '../TodoHeader'
import TodoItem from '../TodoItem'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])

  const addNewToDo = (newToDo) => {
    setTodos((todos) => [...todos, newToDo])
  }

  const removeToDo = (remToDo) => {
    setTodos(todos.filter((item) => item !== remToDo))
  }

  return (
    <>
      <TodoHeader len={todos.length} />

      {todos.map((todo) => (
        <TodoItem item={todo} removeTodo={removeToDo} />
      ))}
      <TodoAdder addNewToDo={addNewToDo} />
    </>
  )
}

export default TodoContainer
