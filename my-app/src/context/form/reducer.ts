import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { FormContext } from './FormContext';

interface Action {
  type: 'add';
  payload: IFormCard;
}

export const fromReducer = (state: FormContext, action: Action) => {
  switch (action.type) {
    case 'add':
      return { ...state, cards: [...state.cards, action.payload] };
    default:
      return { ...state };
  }
};
