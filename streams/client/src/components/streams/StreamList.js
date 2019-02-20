import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {
  return (
    <div>
      StreamList
    </div>
  );
};

export default connect(null, { fetchStreams })(StreamList);