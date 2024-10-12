import React from 'react'

import './cta_block.css'

import ButtonVer1 from '../assets/button/ver1/buttonver1'

import { assets } from '../../assets/assets'

const Cta_block = () => {
  return (
    <div className="CTA_block">
        <div className="Text">
            <h3>Let’s make things happen</h3>
            <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <ButtonVer1 content="Get your free proposal" width="288px"/>
        </div>
        <div className="Illustration">
            <img src={assets.Illustration8} alt="" />
        </div>
    </div>
  )
}

export default Cta_block