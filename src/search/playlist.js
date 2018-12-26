import generic from './generic';

export default async (playlist) => {
  const result = await generic(playlist, 'playlist');
  return result;
};
