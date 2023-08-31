import { GamesLazy, GameLazy, NotFound } from 'pages';

export enum AppRoutes {
  GAMES = 'games',
  NOTFOUND = 'notFound',
}

export const routesConfig = [
  {
    id: [AppRoutes.GAMES],
    path: '/',
    content: <GamesLazy />,
  },
  {
    id: [AppRoutes.GAMES],
    path: '/game/:id',
    content: <GameLazy />,
  },
  {
    id: [AppRoutes.NOTFOUND],
    path: '*',
    content: <NotFound />,
  },
];
