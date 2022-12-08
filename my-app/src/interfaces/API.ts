import { APIError } from './error.interface';

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type category = 'character' | 'location' | 'episode';

export interface API<T> {
  info: Info;
  results: T[];
}

export type APIResponse<T> = API<T> | T[] | T | APIError;
