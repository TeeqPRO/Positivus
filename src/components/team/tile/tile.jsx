import React from 'react'
import { assets } from '../../../assets/assets.js'

const  Tile = ({Image, Name, Link, Role, Description}) => {
  return (
    <div className="Tile">
        <div className="Top">
            <div className="Image">
                <img src={Image} alt={Name} />
            </div>
            <div className="Name">
                <h4>{Name}</h4>
                <p>{Role}</p>
            </div>
            <div className="LinkedIn">
                <a href={Link} target>
                    {assets.Social1}
                </a>
            </div>
        </div>
        <div className="Line"></div>
        <div className="Description">
            <p>
                {Description}
            </p>
        </div>
    </div>
  )
}

export default Tile