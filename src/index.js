/* eslint-disable no-console */
import * as Search from './search';
import * as Album from './album';

(async () => {
  try {
    const { data: result } = await Search.searchArtists('Mother Mother');
    console.log(result.artists.items);
  } catch (err) {
    console.log(err);
  }
})();

module.exports = {
  Search,
  Album,
};
