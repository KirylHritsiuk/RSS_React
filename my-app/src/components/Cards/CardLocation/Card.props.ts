import { Location } from 'interfaces/location.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Location;
}
