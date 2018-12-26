import apiInstance from '../utils/apiInstance';

export default async (query, type) => {
  const response = await apiInstance.get('search', {
    params: {
      q: query,
      type,
    },
  });

  return response;
};
