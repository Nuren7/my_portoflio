import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';

import Button from './Button'  
import Logo from './Logo'
import Socials from './Socials';



function Navbar() {
    const [show,setShow] = useState(false)
    const location = useLocation()

     useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);

      const timer = setTimeout(() => {
        setShow(true);
      }, 700);

      return () => clearTimeout(timer); 
    }, [location.pathname]); 


  return (
      <nav className={`
          top-0 left-0
          bg-black w-full
          grid grid-cols-3
          items-center 
          px-4 sm:px-8 lg:px-16 
          p-6 
          max-h-24
          transition-all duration-500 ease-out
          ${show ? "translate-y-0 opacity-100" : "blur-xl -translate-y-full opacity-0"}     
          `}>
          
        <Logo to="/" src="/my_logo.png" alt="my_logo" />
        
        <ul 
        className="
          flex justify-center 
          gap-1 sm:gap-2 lg:gap-4 
          list-none">
          <li><Button to="/cv">CV</Button></li>
          <li><Button to="/portfolio">portfolio</Button></li>
          <li><Button to="/about">about</Button></li>
        </ul>

        <div className='
            flex justify-end 
            gap-1 sm:gap-3 lg:gap-6'>

          <Socials 
            href="https://github.com/Nuren7"
            className='
            rounded-full
            hover:text-white hover:shadow-[0_0_15px_4px_rgba(255,255,255,1)]'>
            <FaGithub />
          </Socials>

          <Socials 
            href=""
            className="
            hover:text-[#0A66C2] hover:shadow-[0_0_15px_4px_rgba(59,130,246,1)]">
            <FaLinkedin  />
          </Socials>

        </div>



      </nav>
  )
}

export default Navbar
