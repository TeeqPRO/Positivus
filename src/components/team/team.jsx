import React from 'react'
import Tile from './tile/tile'
import './team.css'

const Team = () => {
  return (
    <div className="Team">
        <div className="Title">
            <h2 className="headingVer1">Team</h2>
            <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
        <div className="Tiles">
            <tile Image="https://via.placeholder.com/150" Name="John Doe" Role="CEO" Link="https://www.linkedin.com" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
    </div>
  )
}

export default Team