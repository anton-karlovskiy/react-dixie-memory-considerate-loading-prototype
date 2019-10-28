
import React from 'react';

import ThreeBox from './ThreeBox';
import './main-content.css';

const MainContent = () => {
  return (
    <div className='main-content'>
      <ThreeBox />
      <div className='code-snippet'>
        <div className='block'>
          <p>> Starting 'deploy' ...</p>
          <p>> Uploading: groupbuys/keysets/gmk-dracula/master.tar.gz</p>
          <p>> [========================================] 100% 10s</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
