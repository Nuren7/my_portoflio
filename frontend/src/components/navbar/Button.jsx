import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, children }) {
  return (
    <Link
      to={to}
      className="
        flex
        font-montserrat
        font-thin
        text-2xl
        text-white 
        px-4  
        transition-colors 
        duration-500
        hover:text-gray-400
        hover:opacity-80
      ">
      {children}
    </Link>
  )
}

export default Button
