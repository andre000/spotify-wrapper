import axios from 'axios';
import { searchPlaylists } from '../src/search';

jest.mock('axios');

describe('Artist Search', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(axios, 'get');
  });
  afterEach(() => {
    spyGet.mockRestore();
  });

  it('should call an ajax function to the endpoint', () => {
    searchPlaylists();
    expect(spyGet).toHaveBeenCalled();
  });

  it('should call a get method with correct parameters', () => {
    searchPlaylists('Mother Mother');
    expect(spyGet).toHaveBeenCalledWith('https://api.spotify.com/v1/search', {
      params: {
        q: 'Mother Mother',
        type: 'playlist',
      },
    });
  });

  it('should return a JSON value', async () => {
    axios.get.mockResolvedValue({ body: 'json' });
    const { body: artist } = await searchPlaylists('Mother Mother');
    expect(artist).toEqual('json');
  });
});
