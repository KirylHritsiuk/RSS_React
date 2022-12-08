import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface FromCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IFormCard;
}
