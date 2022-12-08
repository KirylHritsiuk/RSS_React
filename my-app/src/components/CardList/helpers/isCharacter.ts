import { Character } from 'interfaces/character.interface';
import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';

export function isCharacter(data: Character | Episode | Location): data is Character {
  return (data as Character).gender !== undefined;
}
