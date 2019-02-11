import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video, i) => (
    <VideoListItem
      key={i}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return (
    <ul>
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};

export default VideoList;