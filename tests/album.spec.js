import apiInstance from '../src/utils/apiInstance';
import { searchAlbums } from '../src/search';
import { getAlbum, getAlbumTracks } from '../src/album';

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

describe('Album Details', () => {
  let spyGet;
  beforeEach(() => {
    spyGet = jest.spyOn(apiInstance, 'get');
  });
  afterEach(() => {
    spyGet.mockRestore();
  });

  describe('Smoke Tests', () => {
    it('should have `getAlbum` method', () => {
      expect(getAlbum).toBeTruthy();
    });
    it('should have `getAlbumTracks` method', () => {
      expect(getAlbumTracks).toBeTruthy();
    });
  });

  describe('getAlbum', () => {
    it('should call an ajax function to the endpoint', () => {
      getAlbum('');
      expect(spyGet).toHaveBeenCalled();
    });

    it('should call a get method with correct parameters', () => {
      getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(spyGet).toHaveBeenCalledWith('albums/0sNOF9WDwhWunNAHPD3Baj');
    });

    it('should return a JSON value', async () => {
      apiInstance.get.mockResolvedValue({ body: 'json' });
      const { body: album } = await getAlbum('0sNOF9WDwhWunNAHPD3Baj  ');
      expect(album).toEqual('json');
    });

    it('should change the parameter call when getting more than one album', () => {
      getAlbum(['0sNOF9WDwhWunNAHPD3Baj', '0sNOF9WDwhWunNAHPD3Baj']);
      expect(spyGet).toHaveBeenCalledWith('albums/', {
        params: {
          ids: '0sNOF9WDwhWunNAHPD3Baj,0sNOF9WDwhWunNAHPD3Baj',
        },
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call an ajax function to the endpoint', () => {
      getAlbumTracks('');
      expect(spyGet).toHaveBeenCalled();
    });

    it('should call a get method with correct parameters', () => {
      getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
      expect(spyGet).toHaveBeenCalledWith('albums/0sNOF9WDwhWunNAHPD3Baj/tracks');
    });

    it('should return a JSON value', async () => {
      apiInstance.get.mockResolvedValue({ body: 'json' });
      const { body: album } = await getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
      expect(album).toEqual('json');
    });
  });
});
