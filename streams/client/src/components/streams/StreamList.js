import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {
  console.log(props.fetchStreams())
  return (
    <div>
      hello
    </div>
  );
};

export default connect(null, { fetchStreams })(StreamList);