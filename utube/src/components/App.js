import React, { Component } from 'react';

import youTube from '../apis/youTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  // make a call to youtube api with the searched term
  onTermSubmit = async (term) => {
    const results = await youTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0]
    });
  }

  // callback to update selected videos
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.onTermSubmit('javascript');
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
};

export default App;