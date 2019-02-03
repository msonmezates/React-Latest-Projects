import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish work',
        completed: false
      },
      {
        id: 2,
        title: 'Meeting with clients',
        completed: false
      },
      {
        id: 3,
        title: 'Cook dinner',
        completed: false
      },
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
