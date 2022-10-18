import { Character } from 'interfaces/character.interface';
import { Location } from 'interfaces/location.interface';
import { Episode } from 'interfaces/episode.interface';

export interface CardListState {
  character: (Character | Location | Episode)[] | [];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  prev: string | null;
  next: string | null;
}
