import { Character } from './character.interface';

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type category = 'characters' | 'locations' | 'episodes';

export interface API {
  info: Info;
  results: Character[];
}
