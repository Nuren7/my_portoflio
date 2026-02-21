import React from 'react'
import { Link } from 'react-router-dom'

function HeroButton({to, children}) {
  return (    
        <Link 
          to={to}
          className=''>
            {children}
        </Link>
  )
}

export default HeroButton