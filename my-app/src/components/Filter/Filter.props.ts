import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  names: string[];
  checked?: string;
}
