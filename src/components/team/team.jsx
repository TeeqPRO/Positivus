import React, { useState } from 'react';
import Tile from './tile/tile';
import './team.css';
import { assets } from '../../assets/assets';

const Team = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const teamMembers = [
    {
      Image: assets.Team1,
      Name: "John Smith",
      Role: "CEO and Founder",
      Link: "https://www.linkedin.com",
      Description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
      Image: assets.Team2,
      Name: "Jane Doe",
      Role: "Director of Operations",
      Link: "https://www.linkedin.com",
      Description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },
    {
      Image: assets.Team3,
      Name: "Michael Brown",
      Role: "Senior SEO Specialist",
      Link: "https://www.linkedin.com",
      Description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
      Image: assets.Team4,
      Name: "Emily Johnson",
      Role: "PPC Manager",
      Link: "https://www.linkedin.com",
      Description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
      Image: assets.Team5,
      Name: "Sarah Kim",
      Role: "Social Media Specialist",
      Link: "https://www.linkedin.com",
      Description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
      Image: assets.Team6,
      Name: "Brian Williams",
      Role: "Content Creator",
      Link: "https://www.linkedin.com",
      Description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
      Image: assets.Team7,
      Name: "Emily Johnson",
      Role: "Content Creator",
      Link: "https://www.linkedin.com",
      Description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
      Image: assets.Team2,
      Name: "Michael Brown",
      Role: "Content Creator",
      Link: "https://www.linkedin.com",
      Description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    }
  ];

  return (
    <div className="Team">
      <div className="Title">
        <h2 className="headingVer1">Team</h2>
        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <div className="Tiles">
        {teamMembers.slice(0, showMore ? teamMembers.length : 6).map((member, index) => (
          <Tile
            key={index}
            Image={member.Image}
            Name={member.Name}
            Role={member.Role}
            Link={member.Link}
            Description={member.Description}
          />
        ))}
      </div>
      <div className="Button">
        {teamMembers.length > 6 && (
          <button onClick={handleToggle} className="buttonVer1v2" style={{width: "269px", height: "68px"}}>
            {showMore ? "Show Less" : "See all team"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Team;