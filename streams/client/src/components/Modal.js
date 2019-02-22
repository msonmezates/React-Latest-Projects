import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      {/* stopPropagation will prevent the event from bubbling up */}
      <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
        <div className="header">{title}</div>
        <div className="content">
          {content}
        </div>
        <div className="actions">
          {actions}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.node,
  onDismiss: PropTypes.func
};

export default Modal;