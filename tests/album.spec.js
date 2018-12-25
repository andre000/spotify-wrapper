import axios from 'axios';
import { searchAlbums } from '../src/search';

jest.mock('axios');

describe('Album Search', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(axios, 'get');
  });
  afterEach(() => {
    spyGet.mockRestore();
  });

  it('should call an ajax function to the endpoint', () => {
    searchAlbums('');
    expect(spyGet).toHaveBeenCalled();
  });

  it('should call a get method with correct parameters', () => {
    searchAlbums('Get Down');
    expect(spyGet).toHaveBeenCalledWith('https://api.spotify.com/v1/search', {
      params: {
        q: 'Get Down',
        type: 'album',
      },
    });
  });

  it('should return a JSON value', async () => {
    axios.get.mockResolvedValue({ body: 'json' });
    const { body: album } = await searchAlbums('Get Down');
    expect(album).toEqual('json');
  });
});
