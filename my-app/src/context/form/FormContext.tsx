import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { createContext } from 'react';

export interface FormContext {
  cards: IFormCard[] | [];
  addCard: (card: IFormCard) => void;
}

export const state: FormContext = {
  cards: [],
  addCard: () => {},
};

export const FormContext = createContext<FormContext>(state);
