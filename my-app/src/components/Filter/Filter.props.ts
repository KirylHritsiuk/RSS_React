import { Category } from 'context';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  names?: Category[];
  checked?: Category;
  updateFilter: (data: string) => void;
}
