import { category } from 'interfaces/API';
import { Character, CharacterFilter } from 'interfaces/character.interface';
import { Episode, EpisodeFilter } from 'interfaces/episode.interface';
import { Location, LocationFilter } from 'interfaces/location.interface';
import { createContext, Dispatch } from 'react';
import { Action } from './reducer';

export type CAT = Character | Location | Episode;
export type CATFil = CharacterFilter | LocationFilter | EpisodeFilter;
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
  error?: string;
  data: Categories<T>;
}

export const initialState: HomeState<CAT> = {
  url: 'https://rickandmortyapi.com/api/',
  filter: {
    name: '',
    gender: 'All',
    status: 'All',
    page: 1,
  },
  category: null,
  loading: true,
  data: {
    cards: null,
    error: null,
    pages: null,
    count: null,
    prev: null,
    next: null,
  },
};

export const init = (state: HomeState<CAT>) => {
  return Object.assign(state, initialState);
};
export interface HomeContext<T> {
  state: HomeState<T>;
  dispatch: Dispatch<Action<T>>;
}

export const HomeContext = createContext<HomeContext<CAT>>({
  state: initialState,
  dispatch: () => {},
});
