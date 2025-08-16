import React from 'react'
import { data } from '../data'
import { PiPalette, PiWrench, PiDatabase, PiBrain, PiUser, PiStar } from "react-icons/pi"

const Block = ({title, items, Icon}) => (
  <div className="card">
    <div className="kv">
      <div className="icon"><Icon /></div>
      <div style={{fontWeight:700}}>{title}</div>
    </div>
    <div className="tags">
      {items.map((t,i)=> <span key={i} className="tag">{t}</span>)}
    </div>
  </div>
)

export const Skills = () => {
  const s = data.skills
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Technical Skills</h2>
      <p className="lead">A comprehensive toolkit for building modern, scalable web applications</p>
      <div className="grid">
        <Block title="Frontend" items={s.frontend} Icon={PiPalette} />
        <Block title="Backend" items={s.backend} Icon={PiDatabase} />
        <Block title="Tools & Others" items={s.tools} Icon={PiWrench} />
        <Block title="AI & Data" items={s.ai} Icon={PiBrain} />
        <Block title="Soft Skills" items={s.soft} Icon={PiUser} />
        <Block title="Specialization" items={s.specialization} Icon={PiStar} />
      </div>
    </div>
  )
}
