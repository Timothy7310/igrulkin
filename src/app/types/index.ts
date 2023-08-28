import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row' | 'inherit';

export type FCProps = {
  children: ReactNode;
  direction?: FlexDirection;
};

export type GamesList = Game[];

export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};
