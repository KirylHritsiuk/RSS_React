import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  names?: string[];
  checked?: string;
  // onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateFilter: (data: string) => void;
}
