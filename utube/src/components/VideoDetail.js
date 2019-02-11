import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe width="560" height="315" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video.snippet.title} />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object
};

export default VideoDetail;