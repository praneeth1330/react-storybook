import React from 'react'

const Button = (Props) => {
    const {variant="primary ", children ,...rest  }=Props
  return (
    <div>
    <button className={`button ${variant} `} {...rest}>{children}</button>
      
    </div>
  )
}

export default Button
