import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = ({ name, post, timeAgo, avatar }) => {
  return (
    <div className="comment">
      <div className="img-section">
        <img src={avatar} alt="profile" />
      </div>
      <div className="comment-section">
        <div>
          <span>{name}</span><span className="time">{timeAgo}</span>
        </div>
        <p>{post}</p>
      </div>
    </div>
  );
}

CommentDetail.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  timeAgo: PropTypes.string,
  avatar: PropTypes.string
};

export default CommentDetail;