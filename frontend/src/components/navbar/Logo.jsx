import React, { Children } from 'react'
import { Link } from 'react-router-dom'

function Logo({to,src,alt}) {
  return (
    <Link to= {to} className='flex justify-start items-center group'>

      <img  
        src = {src}
        alt = {alt}
        className="
          w-36
          h-auto
          object-contain
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:opacity-60
        "> 
      </img>

    </Link>
  )
}

export default Logo