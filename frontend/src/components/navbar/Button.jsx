import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, children }) {
  return (
    <Link
      to={to}
      className="
        flex
        font-montserrat font-thin
        text-base sm:text-xl lg:text-2xl
        text-gray-300 
        px-2 sm:px3 lg:px-4  
        transition-colors duration-500
        hover:text-gray-400 hover:opacity-80
      ">
      {children}
    </Link>
  )
}

export default Button
