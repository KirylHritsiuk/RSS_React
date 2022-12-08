import { Character } from 'interfaces/character.interface';
import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';

export function isEpisode(data: Character | Episode | Location): data is Episode {
  return (data as Episode).air_date !== undefined;
}
