import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { Character } from 'interfaces/character.interface';

export interface CardListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: Character[];
  url?: string;
}
