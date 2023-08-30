import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GamesList, Game } from 'app/types';

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.freetogame.com/api' }),
  endpoints: (build) => ({
    fetchAllGames: build.query<GamesList, ''>({
      query: () => ({
        url: '/games',
      }),
    }),
    fetchGameByID: build.query<Game, string>({
      query: (id: string) => ({
        url: `/game`,
        params: {
          id,
        },
      }),
    }),
  }),
});
