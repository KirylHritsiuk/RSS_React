import { CharacterFilter } from './character.interface';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationFilter extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
  dimension?: string;
}
