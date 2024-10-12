import React from 'react';

import './block_card.css';

import LinkVer1 from './../../assets/link/ver1/linkVer1.jsx';
import LinkVer2 from './../../assets/link/ver2/linkVer2.jsx';

import { assets } from '../../../assets/assets.js';

const Block_card = ({ content, content2, ver, illustration }) => {
  return (
    <div className={`Block-Card-Ver${ver}`}>
      <div className="Left">
        <div className="Text">
          <h3 className={ver === "1" ? "headingVer1" : "headingVer2"}>
            {content}
          </h3>
          <h3 className={ver === "1" ? "headingVer1" : "headingVer2"}>
            {content2}
          </h3>
        </div>

        <div className="Link">
          {ver === "3" ? <LinkVer2 /> : <LinkVer1 />}
        </div>
      </div>
      <div className="Right">
        <img src={assets[illustration]} alt={illustration} />
      </div>
    </div>
  );
};

export default Block_card;
