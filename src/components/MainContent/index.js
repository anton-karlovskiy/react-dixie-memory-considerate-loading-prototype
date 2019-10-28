
import React from 'react';

import ThreeBox from './ThreeBox';
import TwoBox from './TwoBox';
import { useMemoryStatus } from '../../utils/hooks';
import { DEVICE_MEMORY_LIMIT } from '../../config';
import './main-content.css';

const MainContent = () => {
  const { deviceMemory, unsupported } = useMemoryStatus();

  console.log('[MainContent] deviceMemory, unsupported => ', deviceMemory, unsupported);

  return (
    <div className='main-content'>
      { deviceMemory < DEVICE_MEMORY_LIMIT ? (
        <TwoBox />
      ) : (
        <ThreeBox />
      ) }
    </div>
  );
};

export default MainContent;
