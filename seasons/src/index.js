import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

export default class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    this.getPosition();
  }

  getPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request" />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


