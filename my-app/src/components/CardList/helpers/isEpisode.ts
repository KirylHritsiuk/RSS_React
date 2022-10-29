import { CAT } from 'context/home/HomeContext';
import { Episode } from 'interfaces/episode.interface';

export function isEpisode(data: CAT[] | null): data is Episode[] {
  return data ? (data as Episode[])[0].air_date !== undefined : false;
}
