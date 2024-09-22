import React from 'react';
import Me from '../../assets/videos/test.mp4';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video
        src={Me}
        autoPlay
        loop
        muted
        className="background-video"
      />
     
       
    </div>
  );
};

export default BackgroundVideo;