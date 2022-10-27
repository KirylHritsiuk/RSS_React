import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import React, { createContext } from 'react';

export type Category = 'character' | 'episode' | 'location';

export interface AppContextInterface {
  category?: Category;
  setCategory?: React.Dispatch<React.SetStateAction<Category>>;
}

export const GlobalState = createContext<AppContextInterface>({});
