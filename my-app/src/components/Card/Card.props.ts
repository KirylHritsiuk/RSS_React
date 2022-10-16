import { Character } from 'interfaces/character.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Character;
}
