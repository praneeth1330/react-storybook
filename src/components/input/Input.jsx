import React from 'react'
import "./input.css"

const Input = (Props) => {
    const {size="md"} =Props
  return (
    <div>
    <input type="text" className={`${size} input`} />
      
    </div>
  )
}

export default Input
