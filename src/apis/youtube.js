import axios from "axios";
const KEY = 'AIzaSyCxdcIs3jQzb4z7oDPH6MnsjSzaJNOZ7-k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});