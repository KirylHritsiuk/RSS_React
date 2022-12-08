import { category } from 'interfaces/API';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  updateQuery?: (data: string) => void;
  filter?: category[];
  checked?: category | null;
}
