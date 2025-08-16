import React from 'react'
import { data } from '../data'
import { PiCode } from "react-icons/pi"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export const Hero = () => {
  return (
    <div className="hero-inner">
      {/* <div className="logo-circle"><PiCode /></div> */}
      <h1>Maithili Patel</h1>
      <div className="subtitle">{data.roleLine}</div>
      <p className="para">{data.heroParagraphs[0]}</p>
      <p className="para">{data.heroParagraphs[1]}</p>
      <div className="cta">
        <a className="button" href="#projects" onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>View My Work</a>
        <a className="button secondary" href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Get In Touch</a>
      </div>
      <div className="socials">
        <a href={data.github} target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href={`mailto:${data.email}`}><FaEnvelope /></a>
        <a href={data.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href={`tel:${data.phone.replace(/\s+/g,'')}`}><FaPhoneAlt /></a>
      </div>
    </div>
  )
}
