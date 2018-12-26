import apiInstance from '../src/utils/apiInstance';
import { searchTracks } from '../src/search';

jest.mock('../src/utils/apiInstance');

describe('Artist Search', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(apiInstance, 'get');
  });
  afterEach(() => {
    spyGet.mockRestore();
  });

  it('should call an ajax function to the endpoint', () => {
    searchTracks();
    expect(spyGet).toHaveBeenCalled();
  });

  it('should call a get method with correct parameters', () => {
    searchTracks('Mother Mother');
    expect(spyGet).toHaveBeenCalledWith('search', {
      params: {
        q: 'Mother Mother',
        type: 'track',
      },
    });
  });

  it('should return a JSON value', async () => {
    apiInstance.get.mockResolvedValue({ body: 'json' });
    const { body: artist } = await searchTracks('Mother Mother');
    expect(artist).toEqual('json');
  });
});
