import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App(){
  // highlight active link on scroll
  const [active, setActive] = useState('home')
  useEffect(()=>{
    const ids = ['home','about','skills','projects','experience','contact']
    const onScroll = ()=>{
      let current = 'home'
      ids.forEach(id=>{
        const el = document.getElementById(id)
        if(el && window.scrollY + 120 >= el.offsetTop) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <>
      <Navbar active={active} />
      <main>
        <section id="home" className="hero">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
