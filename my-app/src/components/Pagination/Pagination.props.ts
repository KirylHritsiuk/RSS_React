import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}
