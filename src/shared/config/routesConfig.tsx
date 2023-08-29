import { GamesLazy, NotFound } from 'pages';

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
    id: [AppRoutes.NOTFOUND],
    path: '*',
    content: <NotFound />,
  },
];
