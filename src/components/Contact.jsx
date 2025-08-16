import React from 'react'
import { data } from '../data'
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa"

export const Contact = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Get In Touch</h2>
      <p className="lead">I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology</p>
      <div className="card" style={{maxWidth:900, margin:'0 auto'}}>
        <h3>Let's Connect</h3>
        <p>Whether you're looking for a developer, want to collaborate on a project, or just want to say hi, I'd love to hear from you. Let's build something amazing together!</p>
        <div className="grid grid-2" style={{marginTop:10}}>
          <div className="kv">
            <div className="icon"><FaEnvelope /></div>
            <div>
              <div style={{fontWeight:700}}>Email</div>
              <a href={`mailto:${data.email}`} style={{color:'var(--brand)'}}>{data.email}</a>
            </div>
          </div>
          <div className="kv">
            <div className="icon"><FaPhoneAlt /></div>
            <div>
              <div style={{fontWeight:700}}>Phone</div>
              <a href={`tel:${data.phone.replace(/\s+/g,'')}`} style={{color:'var(--brand)'}}>{data.phone}</a>
            </div>
          </div>
          <div className="kv">
            <div className="icon"><FaGithub /></div>
            <div>
              <div style={{fontWeight:700}}>GitHub</div>
              <a href={data.github} target="_blank" rel="noreferrer" style={{color:'var(--brand)'}}>{data.github.replace('https://','')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
