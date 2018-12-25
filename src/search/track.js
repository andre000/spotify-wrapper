import generic from './generic';

export default async (track) => {
  const result = await generic(track, 'track');
  return result;
};
