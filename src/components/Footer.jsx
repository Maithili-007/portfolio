import React from 'react'
import { data } from '../data'
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container row">
        <div>
          <div style={{fontWeight:800, color:'var(--brand)'}}>Maithili Patel</div>
          <div>Full Stack Developer & Software Engineer</div>
        </div>
        <div className="icons">
          <a href={data.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={`mailto:${data.email}`}><FaEnvelope /></a>
          <a href={data.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}
