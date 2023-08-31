import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row' | 'inherit';

export type FCProps = {
  children: ReactNode;
  direction?: FlexDirection;
};

export enum GamePlatform {
  PC = 'pc',
  WEB = 'browser',
  BOTH = 'all',
}

export enum GamePlatformRU {
  PC = 'Десктоп (Windows)',
  WEB = 'Браузер',
  BOTH = 'Всё',
}

export enum GameGenre {
  MMORPG = 'mmorpg',
  SHOOTER = 'shooter',
  STRATEGY = 'strategy',
  MOBA = 'moba',
  RACING = 'racing',
  SPORTS = 'sports',
  SOCIAL = 'social',
  SANDBOX = 'sandbox',
  'OPEN-WORLD' = 'open-world',
  SURVIVAL = 'survival',
  PVP = 'pvp',
  PVE = 'pve',
  PIXEL = 'pixel',
  VOXEL = 'voxel',
  ZOMBIE = 'zombie',
  'TURN-BASED' = 'turn-based',
  'FIRST-PERSON' = 'first-person',
  ' THIRD-PERSON' = 'third-Person',
  'TOP-DOWN' = 'top-down',
  TANK = 'tank',
  SPACE = 'space',
  SAILING = 'sailing',
  'SIDE-SCROLLER' = 'side-scroller',
  SUPERHERO = 'superhero',
  PERMADEATH = 'permadeath',
  CARD = 'card',
  'BATTLE-ROYALE' = 'battle-royale',
  MMO = 'mmo',
  MMOFPS = 'mmofps',
  MMOTPS = 'mmotps',
  '3D' = '3d',
  '2D' = '2d',
  ANIME = 'anime',
  FANTASY = 'fantasy',
  'SCI-FI' = 'sci-fi',
  FIGHTING = 'fighting',
  'ACTION-RPG' = 'action-rpg',
  ACTION = 'action',
  MILITARY = 'military',
  'MARTIAL-ARTS' = 'martial-arts',
  FLIGHT = 'flight',
  'LOW-SPEC' = 'low-spec',
  'TOWER-DEFENSE' = 'tower-defense',
  HORROR = 'horror',
  MMORTS = 'mmorts',
}

export enum GameSorted {
  'RELEASE-DATE' = 'release-date',
  POPULARITY = 'popularity',
  ALPHABETICAL = 'alphabetical',
  RELEVANCE = 'relevance',
  DEFAULT = '',
}

export enum GameSortedRU {
  'RELEASE-DATE' = 'Дате',
  POPULARITY = 'Популярности',
  ALPHABETICAL = 'Алфавиту',
  RELEVANCE = 'Релевантности',
  DEFAULT = 'По умолчанию',
}

export enum SearchParams {
  GENRE = 'tag',
  PLATFORM = 'platform',
  'SORT-BY' = 'sort-by',
}

export type SearchParamsType = { [key in SearchParams]?: string };

export type Games = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: GameGenre;
  platform: GamePlatform;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: GameGenre;
  platform: GamePlatform;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
};

export type GamesList = Games[];
