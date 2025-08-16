import React from 'react'
import { data } from '../data'
import { PiChatsTeardrop, PiGraduationCap, PiStackSimple, PiUsersThree, PiPresentationChart } from "react-icons/pi"

export const About = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>About</h2>
      <p className="lead">I enjoy transforming ideas into robust web solutions, blending full-stack engineering with creative problem-solving.</p>
      <div className="grid grid-2">
        <div className="card">
          <div className="badge">Background</div>
          <p style={{marginTop:10}}>{data.background}</p>
        </div>
        <div className="card">
          <div className="badge">Key Strengths</div>
          <div className="grid grid-2" style={{marginTop:8}}>
            {data.strengths.map((s,i)=> (
              <div key={i} className="kv card" style={{padding:'16px'}}>
                <div className="icon"><PiStackSimple /></div>
                <div style={{fontWeight:600}}>{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{gridColumn:'1 / -1'}}>
          <div className="badge">Education</div>
          <div style={{marginTop:8}}>
            <strong>{data.education.degree}</strong><br/>
            <a href="#" style={{color:'var(--brand)'}}>{data.education.college}</a><br/>
            <span>{data.education.duration} &nbsp;|&nbsp; {data.education.cgpa}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
