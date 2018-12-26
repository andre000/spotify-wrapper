import * as Search from './search';

(async () => {
  try {
    const { data: result } = await Search.searchArtists('Mother Mother');
    console.log(result.artists.items);
  } catch (err) {
    console.log(err);
  }
})();
