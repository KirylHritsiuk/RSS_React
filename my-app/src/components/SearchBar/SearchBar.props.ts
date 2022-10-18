import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  updateQuery: (data: string) => void;
  updateFilter: (data: string) => void;
  checked?: string;
  filter?: string[];
}
