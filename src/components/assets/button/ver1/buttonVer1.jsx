import React from 'react'
import './buttonver1.css'

const ButtonVer1 = ({ content, width }) => {
  return (
    <div className="buttonVer1" style={{width: `${width}`}}>
        <a href="link.html">
            {content}
        </a>
    </div>
  )
}

export default ButtonVer1