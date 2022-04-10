import React, { useState } from 'react'

const TodoItem = ({ item, removeTodo }) => {
  const handleClick = () => {
    removeTodo(item)
  }
  return (
    <div>
      {item} &nbsp;
      <button onClick={handleClick}>X</button>
    </div>
  )
}

export default TodoItem
