import { Character } from './character.interface';
import { Location } from './location.interface';
import { Episode } from './episode.interface';
import { APIError } from './error.interface';

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type category = 'characters' | 'locations' | 'episodes';

export interface API {
  info: Info;
  results: (Character | Location | Episode)[];
}

export type APIResponse =
  | API
  | (Character | Episode | Location)[]
  | Character
  | Episode
  | Location
  | APIError;
