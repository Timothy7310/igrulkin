import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GamesList, Game, SearchParamsType } from 'app/types';

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.freetogame.com/api' }),
  keepUnusedDataFor: 5,
  endpoints: (build) => ({
    fetchAllGames: build.query<GamesList, ''>({
      query: () => ({
        url: '/games',
      }),
    }),
    fetchFilteredGames: build.query<GamesList, SearchParamsType>({
      query: (searchParams: SearchParamsType) => {
        return {
          url: '/filter',
          params: {
            tag: searchParams.tag,
            platform: searchParams.platform,
            'sort-by': searchParams['sort-by'],
          },
        };
      },
    }),
    fetchGamesWithQuery: build.query<GamesList, SearchParamsType>({
      query: (searchParams: SearchParamsType) => ({
        url: '/games',
        params: {
          platform: searchParams.platform,
          'sort-by': searchParams['sort-by'],
        },
      }),
    }),
    fetchGameByID: build.query<Game, string>({
      query: (id: string) => {
        return {
          url: '/game',
          params: {
            id,
          },
        };
      },
    }),
  }),
});
