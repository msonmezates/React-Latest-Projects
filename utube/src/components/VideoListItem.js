import React from 'react';
import PropTypes from 'prop-types';

import './VideoListItem.css';

const VideoListItem = ({ video, onVideoSelect }) => {

  // Execute callback to pass video to parent App
  const handleVideoItemClick = () => {
    onVideoSelect(video);
  }

  return (
    <li className="video-list-item" onClick={handleVideoItemClick}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <p className="video-description">{video.snippet.title}</p>
    </li>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
};

export default VideoListItem;