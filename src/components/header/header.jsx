import React from 'react'
import ButtonVer1 from '../assets/button/ver1/buttonver1'
import './header.css'

import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className="Header">
        <div className="Text">
            <h1>
                Navigating the digital landscape for success
            </h1>
            <h4>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </h4>
            <ButtonVer1 content="Book a consultation" width="264px" />
        </div>
        <div className="Illustration">
            <img src={assets.Illustration} alt="Illustration" />
        </div>
    </div>
  )
}

export default Header