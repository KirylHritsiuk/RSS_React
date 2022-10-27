import { Category } from 'context';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  updateQuery: (data: string) => void;
  updateFilter: (data: string) => void;
  filter?: Category[];
  checked?: Category;
}
