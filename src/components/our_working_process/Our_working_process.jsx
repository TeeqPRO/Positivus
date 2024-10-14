import React from 'react'

import Owp_component from './Owp_Component/Owp_component'

import './our_working_process.css'

const Our_working_process = () => {
  return ( 
    <div className="Our-working-process">
        <div className="Title">
            <h2 className="headingVer1">Our Working Process</h2>
            <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div className="Content">
          <Owp_component 
            num={'01'} 
            title={"Consultation"} 
            description={"We begin by understanding your business goals, challenges, and vision. This discovery phase ensures we grasp the core of your needs to craft a customized approach that aligns perfectly with your objectives."} 
          />

          <Owp_component 
            num={'02'} 
            title={"Research and Strategy Development"} 
            description={"Our team dives deep into market research, competitor analysis, and audience behavior. With this data, we create a tailored strategy that positions your business for optimal growth and success."} 
          />

          <Owp_component 
            num={'03'} 
            title={"Implementation"} 
            description={"Once the strategy is in place, we move into execution, where we implement targeted campaigns, optimize digital channels, and ensure all elements align with your business goals."} 
          />

          <Owp_component 
            num={'04'} 
            title={"Monitoring and Optimization"} 
            description={"We continuously track performance metrics and analyze data to ensure the strategies are working effectively. Adjustments are made in real time to maximize outcomes and stay ahead of the competition."} 
          />

          <Owp_component 
            num={'05'} 
            title={"Reporting and Communication"} 
            description={"We provide detailed reports on key performance indicators, ensuring you are always informed about the progress. Open communication channels allow for feedback and transparency every step of the way."} 
          />

          <Owp_component 
            num={'06'} 
            title={"Continual Improvement"} 
            description={"Our process doesn’t stop at execution. We are committed to ongoing refinement and optimization, using insights from results to further enhance your strategy and achieve long-term success."} 
          />
        </div>
    </div>
  )
}

export default Our_working_process