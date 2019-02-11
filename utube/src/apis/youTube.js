import axios from 'axios';

const KEY = 'AIzaSyCoz3_gEm34P-AZV6NSLwTFhU0GInPi2D4';

// youtube api call that returns first 10 results
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 10,
  }
});

