import React from 'react'
import { useLocation } from 'react-router-dom' 

import ScrollFadeIn from '../components/ScrollFadeIn'
function Home() {
  /* const location =useLocation() */

  return (

    <section className="h-screen flex items-start">

      <div
        className="
          flex
          items-center
          max-w-7xl
          mx-auto
          w-full
          animate-fade-in
        "
      >
        <img 
          className="-translate-y-6 translate-x-7 h-30"
          src="cybersecurity_button.png" 
          alt="cybersecurity" 
        />

        <img 
          className="-translate-y-20 -translate-x-7 h-137.5"
          src="img_of_me2.png" 
          alt="hero_img" 
        />

        <img 
          className="translate-y-2 -translate-x-11 h-30" 
          src="coder_button.png" 
          alt="coder_button"
        />
      </div>
    </section>


  )
}

export default Home
