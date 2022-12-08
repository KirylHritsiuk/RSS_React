import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Episode | Location;
}
