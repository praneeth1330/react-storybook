import React from 'react'
import './button.css'


const Button = ({variant="primary" ,children , ...rest}) => {
  return (
    <div>
    <button className={`button ${variant}`}{...rest}>{children}</button>
      
    </div>
  )
}

export default Button
