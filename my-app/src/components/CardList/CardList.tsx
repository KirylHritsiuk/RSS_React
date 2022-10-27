import { CardCharacter, CardLocation, CardEpisode, Htag, Loader, Pagination } from 'components';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import { isCharacter } from './helpers/isCharacter';
import { isLocation } from './helpers/isLocation';
import cn from 'classnames';
import { useFetching } from 'Hook/useFetching';

export const CardList = ({ url, className }: CardListProps): JSX.Element => {
  const { state, changePage } = useFetching(url);

  return (
    <>
      {state.error && (
        <Htag className={styles.error} tag="h2">
          {state.error}
        </Htag>
      )}
      <div className={cn(styles.cardList, className)}>
        {state.loading ? (
          <Loader />
        ) : (
          state.character.map((data) => {
            if (isCharacter(data)) {
              return <CardCharacter data={data} key={data.id} />;
            } else if (isLocation(data)) {
              return <CardLocation data={data} key={data.id} />;
            } else {
              return <CardEpisode data={data} key={data.id} />;
            }
          })
        )}
      </div>
      {!!state.totalPages && (
        <Pagination page={state.page} changePage={changePage} prev={state.prev} next={state.next} />
      )}
    </>
  );
};
