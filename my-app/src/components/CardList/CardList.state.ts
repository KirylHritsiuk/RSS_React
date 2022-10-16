import { Character } from 'interfaces/character.interface';

export interface CardListState {
  character: Character[] | [];
  loading: boolean;
  error: string;
  page: number;
  totalPages: number;
  url: string;
  prev: string | null;
  next: string | null;
}
