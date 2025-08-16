import React from 'react'
import { data } from '../data'

export const Navbar = ({ active }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const L = ({id, children}) => (
    <a href={`#${id}`} onClick={(e)=>{e.preventDefault(); scrollTo(id)}} className={active===id?'active':''}>{children}</a>
  )
  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* <div className="brand">Maithili Patel</div> */}
        <div className="nav-links">
          <L id="home">Home</L>
          <L id="about">About</L>
          <L id="skills">Skills</L>
          <L id="projects">Projects</L>
          <L id="experience">Experience</L>
          <L id="contact">Contact</L>
        </div>
      </div>
    </nav>
  )
}
