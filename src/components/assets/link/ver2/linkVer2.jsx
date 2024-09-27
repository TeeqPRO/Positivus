import React from 'react'
import './linkVer2.css'

import { assets } from '../../../../assets/assets'

const LinkVer1 = () => {
  return (
    <div className="linkVer2">
        <a href="link.html">
            <img src={assets.Arrowver2} alt="arrow" />
            <p>Learn more</p>
        </a>
    </div>
  )
}

export default LinkVer1