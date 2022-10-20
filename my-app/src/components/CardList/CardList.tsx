import { CardCharacter, CardLocation, CardEpisode, Htag, Loader, Pagination } from 'components';
import React, { useEffect, useState } from 'react';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import { CardListState } from './CardList.state';
import { API } from 'interfaces/API';
import { Character } from 'interfaces/character.interface';
import { getResponseData } from './helpers/getResponseData';
import { APIError } from 'interfaces/error.interface';
import { isCharacter } from './helpers/isCharacter';
import { isLocation } from './helpers/isLocation';
import cn from 'classnames';

export const CardList = ({ url, className }: CardListProps): JSX.Element => {
  const [state, setState] = useState<CardListState>({
    character: [],
    loading: true,
    error: null,
    page: 1,
    totalPages: 0,
    prev: null,
    next: null,
  });

  useEffect(() => {
    fetching();
  }, [url]);

  const changePage = (url: string, page: number) => {
    setState((prevState) => ({ ...prevState, loading: true, page }));
    fetching(url);
  };

  const fetching = async (urlNew: string = url) => {
    try {
      const response = await fetch(urlNew);
      const data: API | Character[] | Character | APIError = await response.json();
      setState((prevState) => ({ ...prevState, ...getResponseData(data) }));
    } catch (error) {
      const myError = error as Error;
      console.log('fetching', myError.message);
      setState((prevState) => ({ ...prevState, error: myError.message }));
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };
  return (
    <>
      {state.error && (
        <Htag className={styles.error} tag="h2" data-testid={'error'}>
          {state.error}
        </Htag>
      )}
      <div className={cn(styles.cardList, className)} data-testid="cardList">
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
