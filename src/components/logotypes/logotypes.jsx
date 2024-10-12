import React from 'react'
import { assets } from '../../assets/assets.js'
import './logotypes.css'

const Logotypes = () => {
  return (
    <div className="Logotypes">
        <img src={assets.Brand1} alt="Amazon" />
        <img src={assets.Brand2} alt="Dribbble" />
        <img src={assets.Brand3} alt="Hubspot" />
        <img src={assets.Brand4} alt="Notion" />
        <img src={assets.Brand5} alt="Netflix" />
        <img src={assets.Brand6} alt="Zoom" />
    </div>
  )
}

export default Logotypes