import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { HomeState, CAT } from 'store/slices/Home/types';

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: HomeState<CAT>;
  changePage: (url: string) => void;
}
