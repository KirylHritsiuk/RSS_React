import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface FormListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cards: IFormCard[];
}
