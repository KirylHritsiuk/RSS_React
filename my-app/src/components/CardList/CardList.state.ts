import { Character } from 'interfaces/character.interface';

export interface CardListState {
  character: Character[] | [];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  prev: string | null;
  next: string | null;
}
