import * as Search from './search';

(async () => {
  try {
    const result = await Search.searchArtists('Mother Mother');
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
