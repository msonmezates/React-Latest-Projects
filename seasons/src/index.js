import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    console.log('my component was rendered, componentDidMount');
    this.getPosition();
  }

  componentDidUpdate() {
    console.log('my component updated, it rerendered, componentDidUpdate');
  }

  getPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (this.state.lat && !this.state.errorMessage) {
      return <div>Lat: {this.state.lat}</div>
    }
    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


