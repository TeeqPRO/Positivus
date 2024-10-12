import React from 'react'
import './buttonver2.css'

const ButtonVer2 = ({ content, width }) => {
  return (
    <div className="buttonVer2" style={{width: `${width}`}}>
        <a href="link.html">
            {content}
        </a>
    </div>
  )
}

export default ButtonVer2