import React from 'react'
import './buttonver3.css'

const ButtonVer3 = ({ content, width }) => {
  return (
    <div className="buttonVer3" style={{width: `${width}`}}>
        <a href="link.html">
            {content}
        </a>
    </div>
  )
}

export default ButtonVer3