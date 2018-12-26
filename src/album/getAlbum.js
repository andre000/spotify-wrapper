import apiInstance from '../utils/apiInstance';

export default async (id) => {
  const result = !Array.isArray(id) ? await apiInstance.get(`albums/${id}`)
    : await apiInstance.get('albums/', {
      params: {
        ids: id.join(','),
      },
    });
  return result;
};
