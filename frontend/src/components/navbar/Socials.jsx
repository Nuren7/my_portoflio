import React from 'react'
import { Link } from 'react-router-dom'



function Socials({href,children,className=""}) {
  return (
    <a href={href}
      target='_blank'
      rel='noopener noreferrer'
        className={`
            text-4xl
            text-gray-400
            transition-all
            duration-500
            hover:scale-120
            ${className}
          `}>

          {children}
      </a>
  )
}

export default Socials
