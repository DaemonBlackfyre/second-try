import React, { useState } from 'react'

const Batur1 = (props) => {
  const [chck, setChck] = useState(false)
  const gorkom = () => {
    setChck(!chck)
  }
  return (
    <div>
      <button onClick={gorkom}>Click Me</button>
      {chck ? (
        <div>
          Batur says {props.varc} {props.varc2}
        </div>
      ) : null}
    </div>
  )
}

// Usage

export default Batur1
