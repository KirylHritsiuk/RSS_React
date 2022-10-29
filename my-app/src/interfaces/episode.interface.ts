import { CharacterFilter } from './character.interface';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodeFilter extends Pick<CharacterFilter, 'name' | 'page'> {
  episode?: string;
}
