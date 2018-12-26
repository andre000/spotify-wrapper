import generic from './generic';

export default async (artist) => {
  const result = await generic(artist, 'artist');
  return result;
};
