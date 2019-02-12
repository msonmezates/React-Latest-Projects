import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>Count: {count}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(App);