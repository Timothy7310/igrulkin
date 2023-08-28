import { MainLazy, NotFound } from 'pages';

export enum AppRoutes {
  MAIN = 'main',
  ANIME = 'anime',
  MANGA = 'manga',
  NOTFOUND = 'notFound',
}

export const routesConfig = [
  {
    id: [AppRoutes.MAIN],
    path: '/',
    content: <MainLazy />,
  },
  {
    id: [AppRoutes.NOTFOUND],
    path: '*',
    content: <NotFound />,
  },
];
