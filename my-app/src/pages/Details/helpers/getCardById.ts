import { CAT, HomeState } from 'context/home/HomeContext';
import { Character } from 'interfaces/character.interface';
import { Params } from 'react-router-dom';

export const getCardById = (paramId: Readonly<Params<string>>, state: HomeState<CAT>) => {
  const id = paramId.id;
  if (id && state.data.cards) {
    const card = state.data.cards.filter((el) => el.id === +id)[0];
    return card as Character;
  }
  return null;
};
