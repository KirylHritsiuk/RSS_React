import { IFormCard } from 'components/FormCard/FormCard.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface FromCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IFormCard;
}
