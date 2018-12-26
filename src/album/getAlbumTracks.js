import apiInstance from '../utils/apiInstance';

export default async (id) => {
  const result = await apiInstance.get(`albums/${id}/tracks`);
  return result;
};
