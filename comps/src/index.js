import React from 'react';
import ReactDOM from 'react-dom';

import Faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

import './App.css';

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <h4>Warning!</h4>
        <p>Are you sure?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={Faker.name.firstName()}
          post={Faker.lorem.word()}
          timeAgo="Today at 3:15pm"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={Faker.name.firstName()}
          post={Faker.lorem.word()}
          timeAgo="Yesterday at 4:15am"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={Faker.name.firstName()}
          post={Faker.lorem.word()}
          timeAgo="Today at 6:36pm"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));