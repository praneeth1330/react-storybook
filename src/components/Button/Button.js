import React from 'react'
import './button.css'

const Button = (Props) => {
    const {variant="primary ", children ,...rest  }=Props
  return (
    <div>
    <button className={`button ${variant} `} {...rest}>{children}</button>
      
    </div>
  )
}

export default Button
