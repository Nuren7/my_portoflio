import React from 'react'

function Home() {
  return (
    <section className="h-screen flex items-start">
      <div
        className="
          flex
          items-center
          max-w-7xl
          mx-auto
          w-full
          animate-fadeIn
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
