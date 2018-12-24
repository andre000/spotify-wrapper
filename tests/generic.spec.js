import axios from 'axios';

import { search } from '../src/search';

jest.mock('axios');

describe('Generic Search', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(axios, 'get');
  });
  afterEach(() => {
    spyGet.mockRestore();
  });

  it('should call an ajax function to the endpoint', () => {
    search();
    expect(spyGet).toHaveBeenCalled();
  });

  describe('should receive the correct parameters to fetch', () => {
    it('for one type', () => {
      search('Mother Mother', 'artist');
      expect(spyGet).toHaveBeenCalledWith('https://api.spotify.com/v1/search', {
        params: {
          q: 'Mother Mother',
          type: 'artist',
        },
      });
    });

    it('for more than one type', () => {
      search('Mother Mother', ['artist', 'music']);
      expect(spyGet).toHaveBeenCalledWith('https://api.spotify.com/v1/search', {
        params: {
          q: 'Mother Mother',
          type: ['artist', 'music'],
        },
      });
    });
  });

  it('should return a JSON value', async () => {
    axios.get.mockResolvedValue({ body: 'json' });
    const artist = await search('Mother Mother', 'artist');
    expect(artist).toEqual({ body: 'json' });
  });
});
