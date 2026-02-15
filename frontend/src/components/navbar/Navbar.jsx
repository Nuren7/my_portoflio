import React from 'react'
import { Link } from "react-router-dom"
import { FaLinkedin,FaGithub } from "react-icons/fa";

import Button from './Button'  
import Logo from './Logo'
import Socials from './Socials';


function Navbar() {
  return (
      <nav className="grid grid-cols-3 items-center px-16 p-6 max-h-24 bg-black w-full">
  
          <Logo to="/" src="/my_logo.png" alt="my_logo" />

        <ul className="flex justify-center gap-4 list-none">
          <li><Button to="/cv">CV</Button></li>
          <li><Button to="/portfolio">portfolio</Button></li>
          <li><Button to="/about">about</Button></li>
        </ul>

        <div className='flex justify-end gap-6'>
          <Socials 
            href=""
            className='
            rounded-full
            hover:text-white 
            hover:shadow-[0_0_15px_4px_rgba(255,255,255,1)]'>
            <FaGithub />
          </Socials>
          <Socials 
            href=""
            className="hover:text-[#0A66C2] hover:shadow-[0_0_15px_4px_rgba(59,130,246,1)]">
            <FaLinkedin  />
          </Socials>
        </div>



      </nav>
  )
}

export default Navbar
