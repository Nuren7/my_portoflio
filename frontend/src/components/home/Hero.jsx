import React from 'react';

function Hero() {
  return (
    <section className="relative flex justify-center px-4 mt-[-72px]">
      <div className="relative mx-auto w-full max-w-7xl border-b-2 border-gray-400 shadow-[0_6px_3px_-5px_rgba(0,0,0,0.4)] flex justify-center">

        {/* Left decorative image */}
        <img
          src="cybersecurity_button.png"
          alt="cybersecurity"
          className="absolute left-0 top-[45%] w-[22%] max-w-full z-10 animate-slide-In-Left"
        />

        {/* Center image */}
        <img
          src="img_of_me2.png"
          alt="hero_img"
          className="relative w-[66%] max-w-full z-20 animate-slide-In-Down"
        />

        <img
          src="coder_button.png"
          alt="coder_button"
          className="absolute right-0 top-[40%] w-[20%] max-w-full z-10 animate-slide-In-Right"
        />

      </div>
    </section>
  );
}

export default Hero;