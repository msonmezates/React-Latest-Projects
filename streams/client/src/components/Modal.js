import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
      {/* stopPropagation will prevent the event from bubbling up */}
      <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this?
        </div>
        <div className="actions">
          <div className="ui primary button">Delete</div>
          <div className="ui button">Cancel</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;