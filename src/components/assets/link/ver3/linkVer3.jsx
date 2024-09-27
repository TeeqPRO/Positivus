import React from 'react'
import './linkVer3.css'

import { assets } from '../../../../assets/assets'

const LinkVer1 = () => {
  return (
    <div className="linkVer3">
        <a href="link.html">
            <p>Learn more</p>
            <img src={assets.Arrowver3} alt="arrow" />
        </a>
    </div>
  )
}

export default LinkVer1