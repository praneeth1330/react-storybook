import React from 'react'
import "./button.css"
const Button = (Props) => {
    const {varient="peimary", children ,...rest} = Props;
  return (
    <div>
    <button className={` button ${varient }`}{...rest}>{children} </button>
      
    </div>
  )
}

export default Button
