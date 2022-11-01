import { CardEpisode, Htag } from 'components';
import { CardCharacter } from 'components';
import { CardLocation } from 'components';
import { CAT, Categories } from 'context/home/HomeContext';
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
  } else if (isLocation(cards)) {
    return cards.map((data) => <CardLocation data={data} key={data.id} />);
  } else if (isEpisode(cards)) {
    return cards.map((data) => <CardEpisode data={data} key={data.id} />);
  } else {
    return <Htag tag="h2">{error}</Htag>;
  }
};
