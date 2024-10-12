import React from 'react'
import './services.css'

import Block_card from './block_card/block_card.jsx'

const Services = () => {
  return (
     <div className="Services">
        <div className="Title">
            <h2 className="headingVer1">Services</h2>
            <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include: </p>
        </div>
         <div className="Blocks-Container">
            <div className="Top">
               <Block_card content="Search engine" content2="optimization" ver="1" illustration="Illustration2"/>
               <Block_card content="Pay-per-click" content2="advertising" ver="2" illustration="Illustration3"/>
            </div>
            <div className="Middle">
               <Block_card content="Social Media" content2="Marketing" ver="3" illustration="Illustration4"/>
               <Block_card content="Email" content2="Marketing" ver="1" illustration="Illustration5"/>
            </div>
            <div className="Down">
               <Block_card content="Content" content2="Creation" ver="2" illustration="Illustration6"/>
               <Block_card content="Analytics and" content2="Tracking" ver="3" illustration="Illustration7"/>
            </div>
         </div>
     </div>
  )
}

export default Services