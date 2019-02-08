import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID cb27d164568a2a5c073b9fcdb6d587bd5d8fc0e64f1149c5b7b44f108af030f9`
  }
});