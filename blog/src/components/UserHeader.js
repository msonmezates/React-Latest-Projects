import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="header">
        {user && user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

UserHeader.propTypes = {
  userId: PropTypes.number
};

export default connect(mapStateToProps)(UserHeader);