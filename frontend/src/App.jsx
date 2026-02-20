import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import CV from "./pages/CV"
import ScrollFadeIn from './components/ScrollFadeIn'

function App() {
  return (
    <>
      <Navbar/>

      <ScrollFadeIn>
      <main className="
            min-h-screen w-full max-w-7xl mx-auto 
            pt-24 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/> 
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/cv' element={<CV />}/>
        </Routes>
      </main>
    </ScrollFadeIn>
    </>
  )
}

export default App

/*
-home - navbar, hero, latestwork
-portfolio - navbar, hero, projects 
-contact - navbar, hero, socials
-about - navbar, photo and about
*/