import { createContext } from 'react';

interface Categories {
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  prev: null | string;
  next: null | string;
}

export type Category = 'character' | 'episode' | 'location';

export interface HomeContext {
  category: Category | null;
  characters: Categories;
  locations: Categories;
  episodes: Categories;
  setCategory: (data: Category | null) => void;
}

export const state: HomeContext = {
  category: null,
  characters: {
    loading: true,
    error: null,
    page: 1,
    totalPages: 0,
    prev: null,
    next: null,
  },
  locations: {
    loading: true,
    error: null,
    page: 1,
    totalPages: 0,
    prev: null,
    next: null,
  },
  episodes: {
    loading: true,
    error: null,
    page: 1,
    totalPages: 0,
    prev: null,
    next: null,
  },
  setCategory: () => {},
};

export const HomeContext = createContext<HomeContext>(state);
