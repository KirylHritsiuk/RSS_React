import { CAT, HomeState } from 'context/home/HomeContext';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: HomeState<CAT>;
  changePage: (url: string) => void;
}
