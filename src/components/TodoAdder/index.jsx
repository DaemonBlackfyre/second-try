import React, { useState } from 'react'

const TodoAdder = ({ addNewToDo }) => {
  const [toAdd, setToAdd] = useState('')

  const getInputValue = (event) => {
    const userValue = event.target.value
    setToAdd(userValue)
  }

  const handleClick = () => {
    addNewToDo(toAdd)
    setToAdd('')
  }

  return (
    <div>
      <input
        value={toAdd}
        className="border-2"
        type="text"
        onChange={getInputValue}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default TodoAdder
