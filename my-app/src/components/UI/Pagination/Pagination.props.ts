import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalPages?: number;
  page: number;
  changePage: (url: string, page: number) => void;
  prev: string | null;
  next: string | null;
}
