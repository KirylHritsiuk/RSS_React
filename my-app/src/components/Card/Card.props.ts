import { ICatalog } from 'dataBase/catalog.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ICatalog;
}
