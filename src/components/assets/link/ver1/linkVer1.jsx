import React from 'react'
import './linkVer1.css'

import { assets } from '../../../../assets/assets'

const LinkVer1 = () => {
  return (
    <div className="linkVer1">
        <a href="link.html">
            <img src={assets.Arrowver1} alt="arrow" />
            <p>Learn more</p>
        </a>
    </div>
  )
}

export default LinkVer1