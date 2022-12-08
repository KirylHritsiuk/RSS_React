import { Loader, Pagination } from 'components';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import cn from 'classnames';
import { useFetching } from 'Hook/useFetching';
import { getCards } from './helpers/getCard';
import { useEffect } from 'react';

export const CardList = ({ className }: CardListProps): JSX.Element => {
  const { state, changePage, fetching, dispatch, url } = useFetching();

  useEffect(() => {
    dispatch(fetching(url));
  }, []);

  return (
    <>
      <div className={cn(styles.cardList, className)}>
        {state.loading ? <Loader /> : getCards(state.data)}
      </div>
      {!state.data.error && !state.loading && <Pagination state={state} changePage={changePage} />}
    </>
  );
};
