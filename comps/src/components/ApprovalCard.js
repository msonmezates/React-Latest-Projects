import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="approval-card">
      <div className="approval-card-text-section">
        <p className="approval-card-text">{props.children}</p>
      </div>
      <div>
        <button className="approve-btn btn">Approve</button>
        <button className="reject-btn btn">Reject</button>
      </div>
    </div>
  );
}

export default ApprovalCard;