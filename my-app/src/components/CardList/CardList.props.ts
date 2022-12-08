import { ICatalog } from 'dataBase/catalog.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface CardListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  catalog: ICatalog[];
}
