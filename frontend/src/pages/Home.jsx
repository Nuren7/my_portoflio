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
        "
      >
        <img 
          className="h-30"
          src="cybersecurity_button.png" 
          alt="cybersecurity" 
        />

        <img 
          className="h-[480px]"
          src="img_of_me2.png" 
          alt="hero_img" 
        />

        <img 
          className="pl-6 translate-y-5 h-30" 
          src="coder_button.png" 
          alt="coder_button"
        />
      </div>
    </section>
  )
}

export default Home
