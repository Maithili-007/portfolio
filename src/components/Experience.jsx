import React from 'react'
import { data } from '../data'

export const Experience = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Experience</h2>
      <p className="lead">Professional journey and hands‑on experience in software development</p>
      <div className="grid grid-2">
        {data.experience.map((e,i)=> (
          <div className="card" key={i}>
            <div className="badge">{e.badge}</div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:12}}>
              <h3 style={{margin:'6px 0'}}>{e.title}</h3>
              <div style={{color:'var(--muted)'}}>{e.duration}</div>
            </div>
            <div style={{fontWeight:600}}>{e.org}</div>
            <p style={{marginTop:6}}>{
              /* spacer */
            }</p>
            <div>
              <strong>Key Achievements:</strong>
              <ul>
                {e.details.map((d,idx)=> <li key={idx}>{d}</li>)}
              </ul>
            </div>
            <div className="tags">
              {e.tech.map((t,idx)=> <span className="tag" key={idx}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
