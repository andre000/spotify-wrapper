import axios from 'axios';

export default async (query, type) => {
  const response = await axios.get('https://api.spotify.com/v1/search', {
    params: {
      q: query,
      type,
    },
  });

  return response;
};
