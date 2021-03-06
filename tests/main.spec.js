import apiInstance from '../src/utils/apiInstance';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/search';

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    it('should exist the `search` method', () => {
      expect(search).toBeTruthy();
    });

    it('should exist the `searchAlbums` method', () => {
      expect(searchAlbums).toBeTruthy();
    });

    it('should exist the `searchArtists` method', () => {
      expect(searchArtists).toBeTruthy();
    });

    it('should exist the `searchTracks` method', () => {
      expect(searchTracks).toBeTruthy();
    });

    it('should exist the `searchPlaylists` method', () => {
      expect(searchPlaylists).toBeTruthy();
    });
  });
});

describe('API Instance', () => {
  it('should have a defined Auth header and Base URL', () => {
    expect(apiInstance.defaults.baseURL).toBeTruthy();
    expect(apiInstance.defaults.headers.Authorization).toBeTruthy();
  });
});
