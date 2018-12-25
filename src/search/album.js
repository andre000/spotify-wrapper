import generic from './generic';

export default async (album) => {
  const result = await generic(album, 'album');
  return result;
};
