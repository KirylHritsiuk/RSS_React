import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  names?: string[];
  type: 'radio' | 'checkbox';
  checked?: string;
  label: 'status' | 'gender';
  updateFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
