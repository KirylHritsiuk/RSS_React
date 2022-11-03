import { category } from 'interfaces/API';
import { Character } from 'interfaces/character.interface';
import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';

export type CAT = Character | Location | Episode;

export interface Categories<T> {
  cards: T[] | null;
  error: string | null;
  count: number | null;
  pages: number | null;
  prev: string | null;
  next: string | null;
}
export type gender = 'Female' | 'Male' | 'Genderless' | 'unknown' | 'All';
export type status = 'Dead' | 'Alive' | 'unknown' | 'All';

export interface Filter {
  name?: string;
  gender?: gender;
  status?: status;
  page?: number;
}

export interface HomeState<T> {
  url: 'https://rickandmortyapi.com/api/';
  filter: Filter;
  category: category | null;
  loading: boolean;
  data: Categories<T>;
}
