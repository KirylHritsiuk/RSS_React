import { Character } from './character.interface';
import { Episode } from './episode.interface';
import { APIError } from './error.interface';
import { Location } from './location.interface';

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type category = 'character' | 'location' | 'episode';
export type CAT = Character | Location | Episode;

export interface API<T> {
  info: Info;
  results: T[];
}

export type APIResponse<T extends CAT> = API<T> | T[] | T | APIError;
