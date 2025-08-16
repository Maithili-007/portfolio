import React from 'react'
import { data } from '../data'
import { PiSuitcaseSimple, PiHouseSimple, PiCheckSquareOffset } from "react-icons/pi"

const icons = { PiSuitcaseSimple, PiHouseSimple, PiCheckSquareOffset }

export const Projects = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Featured Projects</h2>
      <p className="lead">A collection of projects showcasing my technical skills and problem‑solving abilities</p>
      <div className="grid">
        {data.projects.map((p,i)=> {
          const Icon = icons[p.icon] || PiSuitcaseSimple
          return (
            <div className="card project" key={i}>
              <div className="kv">
                <div className="icon"><Icon /></div>
                <div style={{fontWeight:700}}>{p.title}</div>
              </div>
              <div>{p.desc}</div>
              <div style={{marginTop:8}}>
                <strong>Key Features:</strong>
                <ul>
                  {p.features.map((f,idx)=> <li key={idx}>{f}</li>)}
                </ul>
              </div>
              <div className="tags">
                {p.tech.map((t,idx)=> <span className="tag" key={idx}>{t}</span>)}
              </div>
              <div className="row" style={{marginTop:8}}>
                <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                <a className="btn" href={p.code} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
