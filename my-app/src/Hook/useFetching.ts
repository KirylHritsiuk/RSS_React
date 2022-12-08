import { CardListState } from 'components/CardList/CardList.state';
import { getResponseData } from 'components/CardList/helpers/getResponseData';
import { APIResponse } from 'interfaces/API';
import { useCallback, useEffect, useState } from 'react';

export const useFetching = (url: string) => {
  const [state, setState] = useState<CardListState>({
    character: [],
    loading: true,
    error: null,
    page: 1,
    totalPages: 0,
    prev: null,
    next: null,
  });

  const fetching = useCallback(
    async (urlNew: string = url) => {
      try {
        const response = await fetch(urlNew);
        const data: APIResponse = await response.json();
        setState((prevState) => ({ ...prevState, ...getResponseData(data) }));
      } catch (error) {
        const myError = error as Error;
        setState((prevState) => ({ ...prevState, error: myError.message }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    },
    [url]
  );

  useEffect(() => {
    fetching();
  }, [url, fetching]);

  const changePage = (url: string, page: number) => {
    setState((prevState) => ({ ...prevState, loading: true, page }));
    fetching(url);
  };

  return { state, setState, fetching, changePage };
};
