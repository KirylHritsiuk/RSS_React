import { CAT, HomeState } from 'context/home/HomeContext';
import { Params } from 'react-router-dom';

export const getCardById = (paramId: Readonly<Params<string>>, state: HomeState<CAT>) => {
  const id = paramId.id;
  if (id && state.data.cards) {
    const card = state.data.cards.filter((el) => el.id === +id)[0];
    if (card && 'gender' in card) {
      return card;
    } else if (card && 'air_date' in card) {
      return card;
    } else if (card && 'dimension' in card) {
      return card;
    } else {
      return null;
    }
  }
  return null;
};
