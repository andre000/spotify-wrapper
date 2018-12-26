import axios from 'axios';

require('dotenv').config();

export default axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer: ${process.env.SPOTIFY_TOKEN}`,
  },
});
