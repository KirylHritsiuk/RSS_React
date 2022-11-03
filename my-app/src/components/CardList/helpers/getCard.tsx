import { CardEpisodeLocation, Htag } from 'components';
import { CardCharacter } from 'components';
import { CAT } from 'interfaces/API';
import { Categories } from 'store/slices/Home/types';
import { isCharacter } from './isCharacter';
import { isEpisode } from './isEpisode';
import { isLocation } from './isLocation';

export const getCards = (data: Categories<CAT>) => {
  const { cards, error } = data;
  if (error) {
    console.log('getCards', error);
    return <Htag tag="h2">{error}</Htag>;
  }
  if (isCharacter(cards)) {
    return cards.map((data) => <CardCharacter data={data} key={data.id} />);
  } else if (isLocation(cards) || isEpisode(cards)) {
    return cards.map((data) => <CardEpisodeLocation data={data} key={data.id} />);
  } else {
    return <Htag tag="h2">{error}</Htag>;
  }
};
