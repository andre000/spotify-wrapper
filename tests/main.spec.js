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
  });
});
