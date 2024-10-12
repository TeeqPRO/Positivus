import React, { useState } from 'react';
import MinusIconVer1 from '../../assets/minus_icon/ver1/minusIconVer1';
import PlusIconVer1 from '../../assets/plus_icon/ver1/plusIconVer1';

import './Owp_component.css';

const OwpComponent = ({ num, title, description }) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const handleToggle = () => {
    setIsUnfolded(!isUnfolded);
  };

  return (
    <div className={`Owp-Component ${isUnfolded ? 'Owp-Component-Unfolded' : ''}`} id={`Owp_Component${num}`}>
      <div className="Top" onClick={handleToggle}>
        <div className="Left">
          <div className="Number">
            <p>{num}</p>
          </div>
          <div className="Title">
            <p>{title}</p>
          </div>
        </div>
        <div className="Right">
          {isUnfolded ? <MinusIconVer1 /> : <PlusIconVer1 />}
        </div>
      </div>
      {isUnfolded && <div className="Description"><div className="Line" /><p>{description}</p></div>}
    </div>
  );
};

export default OwpComponent;
