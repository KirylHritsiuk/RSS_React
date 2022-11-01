import { Htag, Loader, Pagination } from 'components';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import cn from 'classnames';
import { useFetching } from 'Hook/useFetching';
import { getCards } from './helpers/getCard';

export const CardList = ({ className }: CardListProps): JSX.Element => {
  const { state, changePage } = useFetching();

  return (
    <>
      {state.error && (
        <Htag className={styles.error} tag="h2">
          {state.error}
        </Htag>
      )}
      <div className={cn(styles.cardList, className)}>
        {state.loading ? <Loader /> : getCards(state.data)}
      </div>
      {!!state.data.pages && !state.loading && <Pagination state={state} changePage={changePage} />}
    </>
  );
};
