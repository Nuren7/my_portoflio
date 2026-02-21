import React from 'react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'



function ScrollFadeIn({ children }) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.classList.remove("animate-fade-in")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()

  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}



export default ScrollFadeIn