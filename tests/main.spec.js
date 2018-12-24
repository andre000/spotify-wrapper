import axios from 'axios';

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/search';

jest.mock('axios');

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

  describe('Generic Search', () => {
    it('should call an ajax function to the endpoint', () => {
      const mockedResponse = {};
      const spy = jest.spyOn(axios, 'get');

      axios.get.mockResolvedValue(mockedResponse);
      search();

      expect(spy).toHaveBeenCalled();
    });
  });
});
