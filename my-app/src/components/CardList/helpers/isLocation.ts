import { Character } from 'interfaces/character.interface';
import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';

export function isLocation(data: Character | Episode | Location): data is Location {
  return (data as Location).dimension !== undefined;
}
