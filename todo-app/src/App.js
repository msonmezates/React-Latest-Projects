import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Finish work',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Meeting with clients',
        completed: false
      },
      {
        id: uuidv4(),
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
  // Add todo item
  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  handleDeleteButton={this.handleDeleteButton}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
