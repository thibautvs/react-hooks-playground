import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  useEffect(() => {
    console.log('Subscribe to API effect')
    return () => console.log('Unsubscribe to API effect')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter
