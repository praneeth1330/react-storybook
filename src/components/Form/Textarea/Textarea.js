import React from 'react'
import './textarea.css'

function Textarea (props) {
  const { size = 'medium', ...rest } = props
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default Textarea