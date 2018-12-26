import apiInstance from '../src/utils/apiInstance';
import { searchAlbums } from '../src/search';

jest.mock('../src/utils/apiInstance');

describe('Album Search', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(apiInstance, 'get');
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
    expect(spyGet).toHaveBeenCalledWith('search', {
      params: {
        q: 'Get Down',
        type: 'album',
      },
    });
  });

  it('should return a JSON value', async () => {
    apiInstance.get.mockResolvedValue({ body: 'json' });
    const { body: album } = await searchAlbums('Get Down');
    expect(album).toEqual('json');
  });
});
