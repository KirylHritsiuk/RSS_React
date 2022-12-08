import { CAT } from 'context/home/HomeContext';
import { Character } from 'interfaces/character.interface';

export function isCharacter(data: CAT[] | null): data is Character[] {
  return data ? (data as Character[])[0].gender !== undefined : false;
}
