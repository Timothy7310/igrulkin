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
    fetchGameByID: build.query<Game, number>({
      query: (id: number) => ({
        url: `/game`,
        params: {
          id,
        },
      }),
    }),
  }),
});
