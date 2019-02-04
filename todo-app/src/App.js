import React, { Component } from 'react';
import Header from './components/layout/Header';
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

  // Toggle complete checkbox
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  // Delete todo item when x is clicked
  handleDeleteButton = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          handleDeleteButton={this.handleDeleteButton}
        />
      </div>
    );
  }
}

export default App;
